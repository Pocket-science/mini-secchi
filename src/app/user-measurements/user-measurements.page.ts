import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';

import { LeafletMapComponent } from '../components/leaflet-map/leaflet-map.component';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-user-measurements',
  templateUrl: './user-measurements.page.html',
  styleUrls: ['./user-measurements.page.scss'],
})
export class UserMeasurementsPage implements OnInit {
  markers: any[]; // Declare the property here
 

  forelUleColors: { [key: number]: string } = {
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

  defaultColor: string = "#FFFFFF";
constructor( private modalController: ModalController) {}


  async ngOnInit() {


    const currentUser = Parse.User.current();
    await currentUser.fetch(); // fetch the latest data for this user
    console.log("Current User ID: ", currentUser.id);

    const query = new Parse.Query('secchi_data');
    query.equalTo('user_uid', currentUser.id);

    const userMeasurements = await query.find();

    this.markers = userMeasurements;
    
    console.log("User Measurements: ", userMeasurements);
    
  }

  getForelUleColor(depth: number | undefined): string {
    // If depth is not undefined, return the corresponding color, otherwise return default color
    return depth !== undefined ? this.forelUleColors[depth] || 'defaultColor' : 'defaultColor';
  }



async openMapModal(latitude: number, longitude: number) {
  if (latitude && longitude){
  const modal = await this.modalController.create({
    component: LeafletMapComponent,
    componentProps: {
      latitude: latitude,
      longitude: longitude,
      markers: this.markers,
    }
  });
  return await modal.present();
}
}



}
