import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as L from 'leaflet';

type ForelUleColors = {
  [key: number]: string;
};

const forelUleColors: ForelUleColors = {
  1: "#2158BC",
  2: "#3169C5",
  3: "#3280A0",
  4: "#568F96",
  5: "#559896",
  6: "#6D9098",
  7: "#6D8C86",
  8: "#759E72",
  9: "#7BA654",
  10: "#7DAE38",
  11: "#95B645",
  12: "#94B660",
  13: "#AAB86D",
  14: "#ADB55F",
  15: "#A8A965",
  16: "#A9A95D",
  17: "#AEA960",
  18: "#B3A053",
  19: "#AF8A44",
  20: "#A46905",
  21: "#A14D04"
};

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss'],
})
export class LeafletMapComponent  implements OnInit, OnDestroy {
  map: L.Map;
  markers : any[] = [];
  layerGroup = L.layerGroup();
  latitude: number = 0;
  longitude: number = 0;

  constructor(private modalController: ModalController) {

  }

  async ngOnInit() {

    this.leafletMap();
    console.log("LeafletMapComponent ngOnInit");
    //dirty way to make sure the size of leaflet map is reset/adjusted to container size
    setTimeout(() => {
      this.map?.invalidateSize(true);
   }, 500);
   this.refreshMap();
  }

  addMarkers(){
    if (this.markers.length > 0) {
      this.markers.forEach((marker, index) => {
        console.log('adding marker ' + index);
      const key = marker.colourathalfdepth; // Assuming this comes as a number

      if (typeof key === 'number' && key >= 1 && key <= 21) {
        const circleColor = forelUleColors[key]

        const popupContent = this.generatePopupHTML(marker);
        const newMarker = L.circle([marker.latitude, marker.longitude], { color: circleColor, radius: 50 }).bindPopup(popupContent);
        if (this.map) {
          newMarker.addTo(this.map);
        }
      }
      });
    } else {
      console.error('no data is loaded, nothing to show');
    }
  }

  generatePopupHTML(marker: any): string {
    const formatDate = (date?: Date): string => {
      return date ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A';
    };

    // Assuming colouratsurfaceimage has the same structure as colourathalfdepthimage
    const colourAtSurfaceImg = marker.colouratsurfaceimage ? `<img src="${marker.colouratsurfaceimage._url}" alt="Colour at Surface Image" style="max-width: 50%; height: auto;">` : '';
    const colourAtHalfDepthImg = marker.colourathalfdepthimage ? `<img src="${marker.colourathalfdepthimage._url}" alt="Colour at Half Depth Image" style="max-width: 50%; height: auto;">` : '';

    return `
      <div class="popup-content">
        <h3>${formatDate(marker.createdAt)}</h3>
        <strong>Latitude:</strong> ${marker.latitude?.toFixed(2) ?? 'N/A'}<br>
        <strong>Longitude:</strong> ${marker.longitude?.toFixed(2) ?? 'N/A'}<br>
        <strong>Secchi Depth:</strong> ${marker.secchi_depth ?? 'N/A'}<br>
        <strong>Distance to Water:</strong> ${marker.distancetowater ?? 'N/A'}<br>
        <strong>Colour at Half Depth:</strong> ${marker.colourathalfdepth ?? 'N/A'}<br>
        ${colourAtHalfDepthImg}
        ${colourAtSurfaceImg}
      </div>
    `;
  }

  refreshMap(){
    this.clearMap();
    this.addMarkers();
  }

  clearMap(){
    if (this.map){
      this.map.removeLayer(this.layerGroup);
      this.layerGroup.clearLayers();
    }
  }

  leafletMap() {
    // this.map = Leaflet.map('mapId').fitWorld();
    this.map = L.map('mapId', {center: [this.latitude, this.longitude], zoom: 15});
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© Pocket. Science',
    }).addTo(this.map);
  }

  ngOnDestroy(): void {
    if (this.map){
      this.map.remove();
    }

  }

  dismissModal(){
    console.log("dismissModal");
    this.modalController.dismiss();
    this.clearMap();
  }
}
