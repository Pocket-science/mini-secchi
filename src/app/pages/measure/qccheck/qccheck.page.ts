import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Guid } from "guid-typescript";
import * as Parse from 'parse';
import { ENV } from '../../../app.constant';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-qccheck',
  templateUrl: './qccheck.page.html',
  styleUrls: ['./qccheck.page.scss'],
})
export class QccheckPage implements OnInit {


  // Mobis Entries (default)
  private parseAppId: string = ENV.parseAppId;
  private parseServerUrl: string = ENV.parseServerUrl;
  private parseJSKey: string = ENV.parseJSKey;
  // PML entries for processing and grafana
  private parsePMLAppId: string = ENV.parsePMLAppId;
  private parsePMLServerUrl: string = ENV.parsePMLServerUrl;
  private parsePMLJSKey: string = ENV.parsePMLJSKey;

  user = null;
  language = '';
  public swversion_number: string;
  public swversion_code: number;
  public latitude: number;
  public longitude: number;
  public latitude_at_start: number;
  public longitude_at_start: number;
  public distancetowater: number;
  public reappear: number;
  public colourathalfdepth: number;
  public colourathalfdepthimage: string;
  public colouratsurface: number;
  public colouratsurfaceimage: string;
  public phvalue: number;
  public bottom_visible: string;
  public end_of_tape: string;
  public angle_estimated: number;
  public datetime: Date;
  public datetime_ux: string;
  public secchi_depth: string;
  public rec_uid: string;
  
  watchId: any;

  newSecchi = { uid: null, swversion_number: null, swversion_code: null, latitude: null, longitude: null, distancetowater: null, reappear: null, colourathalfdepth: null, colourathalfdepthimage: null, colouratsurface: null, colouratsurfaceimage: null, datetimerecorded: null, datetime_ux: null, bottom_visible: null, end_of_tape: null, phvalue: null, angle_estimated: null, secchi_depth: null };

  constructor(private storage: Storage) {

    this.rec_uid = Guid.raw(); // make it a string

  }



  async ngOnInit() {
    this.storage.create();
    this.parseInitialize();

    this.getLocation();
    this.startTracking();


    this.storage.get('swversion_number').then((val) => {

      this.swversion_number = val;

    });

    this.storage.get('swversion_code').then((val) => {

      this.swversion_code = val;

    });


    // recheck lat/lon
    this.latitude = Number(await this.storage.get('latitude'));
    this.longitude = Number(await this.storage.get('longitude'));


    this.latitude_at_start = Number(await this.storage.get('latitude_at_start'));
    this.longitude_at_start = Number(await this.storage.get('longitude_at_start'));


    this.storage.get('distancetowater').then((val) => {

      this.distancetowater = val;

    });


    this.storage.get('reappear').then((val) => {

      this.reappear = val;

    });


    this.storage.get('colourathalfdepth').then((val) => {

      this.colourathalfdepth = val;

    });


    this.storage.get('colouratsurface').then((val) => {

      this.colouratsurface = val;

    });



    this.storage.get('colourathalfdepthimage').then((val) => {
      // check if it is null
      if (val == null) {
        console.log("colourathalfdepthimage is null");
        return;
      }


      // convert to Parse file
      val = new Parse.File("colourathalfdepthimage.png", { base64: val }, "image/png");





      this.colourathalfdepthimage = val;

    });


    this.storage.get('colouratsurfaceimage').then((val) => {
      // check if it is null
      if (val == null) {
        console.log("colouratsurfaceimage is null");
        return;

      }


      // convert to Parse file
      val = new Parse.File("colouratsurfaceimage.png", { base64: val }, "image/png");




      this.colouratsurfaceimage = val;







    });






    this.storage.get('phvalue').then((val) => {

      this.phvalue = val;

    });



    this.storage.get('bottom_visible').then((val) => {

      this.bottom_visible = val;

    });

    this.storage.get('end_of_tape').then((val) => {

      this.end_of_tape = val;

    });



    this.storage.get('angle_estimated').then((val) => {

      this.angle_estimated = val;

    });


    this.storage.get('secchi_depth').then((val) => {

      this.secchi_depth = val;

    });


    let d = new Date();

    this.datetime = d;

    var unixTimeStamp = Math.floor(d.getTime() / 1000);
    this.datetime_ux = unixTimeStamp.toString();





  }

  async validate() {

    // stop GPS watch
    this.stopTracking();
    // now save to Parse

    var secchi_data = Parse.Object.extend('secchi_data4');
    var secchi_store = new secchi_data();
    // set initial data record
    console.log("saving to Parse");

    secchi_store.set('uid', this.rec_uid);
    secchi_store.set('latitude', this.latitude);
    secchi_store.set('longitude', this.longitude);
    secchi_store.set('distancetowater', this.distancetowater);
    secchi_store.set('reappear', this.reappear);
    secchi_store.set('colourathalfdepth', this.colourathalfdepth);
    secchi_store.set('colourathalfdepthimage', this.colourathalfdepthimage);
    secchi_store.set('colouratsurface', this.colouratsurface);
    secchi_store.set('colouratsurfaceimage', this.colouratsurfaceimage);
    secchi_store.set('phvalue', this.phvalue);
    secchi_store.set('bottom_visible', this.bottom_visible);
    secchi_store.set('end_of_tape', this.end_of_tape);
    secchi_store.set('angle_estimated', this.angle_estimated);
    secchi_store.set('secchi_depth', this.secchi_depth);
    secchi_store.set('datetime_ux', this.datetime_ux.toString());
    secchi_store.set('datetimerecorded', this.datetime.toISOString());





    try {
      const result = await secchi_store.save();



      console.log('Data saved successfully:', result);
    } catch (error) {
      console.error('Error saving data:', error);
      // You could add additional handling for the error here, such as displaying a message to the user or retrying the save operation.
    }




  }


  private parseInitialize() {

   Parse.initialize(this.parseAppId, this.parseJSKey);

//    Parse.initialize(this.parsePMLAppId, this.parsePMLJSKey);

      (Parse as any).serverURL = this.parseServerUrl; // use your server url
//    (Parse as any).serverURL = this.parsePMLServerUrl; // use your server url

  }


  async getLocation() {
    const position = await Geolocation.getCurrentPosition({ enableHighAccuracy: true });

    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;





    // store GPS info.
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

  async startTracking() {
    this.watchId = Geolocation.watchPosition({ enableHighAccuracy: true }, (position, err) => {
      if (position) {

        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
    
        console.log('Latitude: ', position.coords.latitude, ', Longitude: ', position.coords.longitude);
      }
      if (err) {
        console.log('Error: ', err);
      }
    });
  }

  stopTracking() {
    if (this.watchId) {
      Geolocation.clearWatch({ id: this.watchId });
    }
  }


}