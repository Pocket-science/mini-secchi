import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ParseProvider } from '../../../providers/parse/parse';
import { Guid } from "guid-typescript";
import { Parse } from 'parse';



@Component({
  selector: 'app-qccheck',
  templateUrl: './qccheck.page.html',
  styleUrls: ['./qccheck.page.scss'],
})
export class QccheckPage implements OnInit {
// now get all the values

public swversion_number:string;
public swversion_code:number;
public latitude: number;
public longitude: number;
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

  newScore = {  uid: null, swversion_number:null, swversion_code:null, latitude: null,  longitude: null, distancetowater: null, reappear: null, colourathalfdepth: null, colourathalfdepthimage: null, colouratsurface: null, colouratsurfaceimage: null, datetimerecorded: null, datetime_ux:null, bottom_visible:null, end_of_tape:null, phvalue:null, angle_estimated:null, secchi_depth:null };
  gameScores = [];

  constructor(private storage: Storage, private parseProvider: ParseProvider) {  

    this.rec_uid = Guid.raw(); // make it a string

}





  ngOnInit() {
     this.storage.create();




     
  this.storage.get('swversion_number').then((val) => {

this.swversion_number= val;

  });

  this.storage.get('swversion_code').then((val) => {

this.swversion_code= val;

  });



  this.storage.get('latitude').then((val) => {

this.latitude= val;

  });

  this.storage.get('longitude').then((val) => {

this.longitude= val;

  });


  this.storage.get('distancetowater').then((val) => {

this.distancetowater= val;

  });


    this.storage.get('reappear').then((val) => {

this.reappear= val;

  });


    this.storage.get('colourathalfdepth').then((val) => {

this.colourathalfdepth= val;

  });


    this.storage.get('colouratsurface').then((val) => {

this.colouratsurface= val;

  });



        this.storage.get('colourathalfdepthimage').then((val) => {


// convert to Parse file
   val = new Parse.File("colourathalfdepthimage.png",  { base64: val},"image/png");





this.colourathalfdepthimage= val;

  });


    this.storage.get('colouratsurfaceimage').then((val) => {

// convert to Parse file
   val = new Parse.File("colouratsurfaceimage.png",  { base64: val},"image/png");




this.colouratsurfaceimage= val;








  });






    this.storage.get('phvalue').then((val) => {

this.phvalue= val;

  });



    this.storage.get('bottom_visible').then((val) => {

this.bottom_visible= val;

  });

    this.storage.get('end_of_tape').then((val) => {

this.end_of_tape= val;

  });




    this.storage.get('angle_estimated').then((val) => {

this.angle_estimated= val;

  });


this.storage.get('secchi_depth').then((val) => {

this.secchi_depth= val;

  });


let d = new Date();

this.datetime=d;

var unixTimeStamp = Math.floor(d.getTime() / 1000);
this.datetime_ux=unixTimeStamp.toString();
  }

  async validate() {
    await this.storage.create();

// Send data to Parse server


this.newScore.swversion_code=Number(this.swversion_code); // this is a number!!
this.newScore.swversion_number=this.swversion_number; //this is a string!
this.newScore.uid= this.rec_uid;
this.newScore.latitude=this.latitude;
this.newScore.longitude=this.longitude;
this.newScore.distancetowater=this.distancetowater;
this.newScore.reappear=this.reappear;
this.newScore.colourathalfdepth=this.colourathalfdepth;
this.newScore.colourathalfdepthimage=this.colourathalfdepthimage;
this.newScore.colouratsurface=this.colouratsurface;
this.newScore.colouratsurfaceimage=this.colouratsurfaceimage;
this.newScore.phvalue=this.phvalue;
this.newScore.bottom_visible=this.bottom_visible;
this.newScore.end_of_tape=this.end_of_tape;
this.newScore.angle_estimated=this.angle_estimated;
this.newScore.secchi_depth=this.secchi_depth;
this.newScore.datetime_ux=this.datetime_ux.toString();
this.newScore.datetimerecorded=this.datetime.toISOString();


this.postGameScore();


  }



 public postGameScore() {
    this.parseProvider.addGameScore(this.newScore).then((gameScore) => {
      this.gameScores.push(gameScore);

this.newScore.swversion_code=null;
this.newScore.swversion_number=null;
this.newScore.uid=null;
this.newScore.datetimerecorded = null;
this.newScore.datetime_ux = null;
this.newScore.distancetowater=null;
this.newScore.reappear=null;
this.newScore.colourathalfdepth=null;
this.newScore.colouratsurface=null;
this.newScore.colourathalfdepthimage=null;
this.newScore.colouratsurfaceimage=null;
this.newScore.phvalue=null;
this.newScore.bottom_visible=null;
this.newScore.end_of_tape=null;
this.newScore.angle_estimated=null;
this.newScore.secchi_depth=null;
this.newScore.longitude = null;
this.newScore.latitude = null;
    }, (error) => {
      console.log(error);
      alert('Error adding data, check internet connection.');
    });
  }







}
