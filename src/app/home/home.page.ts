import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Geolocation} from '@capacitor/geolocation';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { ParseProvider } from '../providers/parse/parse';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  latitude: number;
  longitude: number;
  AppName:string;
  PackageName:string;
  VersionCode:string|number;
  VersionNumber:string;


  constructor(private storage: Storage, private appVersion: AppVersion) {
  this.getLocation();


     this.appVersion.getVersionCode().then(value => {
      this.VersionCode = value;
    }).catch(err => {
      alert(err);
    });
    this.appVersion.getVersionNumber().then(value => {
      this.VersionNumber = value;
    }).catch(err => {
      alert(err);
    });
    
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


this.storage.set('swversion_code', this.VersionCode).then(result => {
console.log('Data is saved');
}).catch(e => {
console.log("error: " + e);
});

this.storage.set('swversion_number', this.VersionNumber).then(result => {
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
