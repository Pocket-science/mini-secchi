import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Geolocation} from '@capacitor/geolocation';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  latitude: number;
  longitude: number;



  constructor(private storage: Storage) {
  this.getLocation();
  }






  async getLocation() {
  const position = await Geolocation.getCurrentPosition();
  this.latitude = position.coords.latitude;
  this.longitude = position.coords.longitude;






// store GPS info
await this.storage.create();


this.storage.set('latitude', this.latitude).then(result => {
console.log('Data is saved');
}).catch(e => {
console.log("error: " + e);
});
  

this.storage.set('longitude', this.longitude).then(result => {
console.log('Data is saved');
}).catch(e => {
console.log("error: " + e);
});





}



  async ngOnInit() {





await this.storage.create();
    // clear the storage when submitted
    await this.storage.clear();
 }


  



}
