import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ParseProvider } from '../../../providers/parse/parse';



@Component({
  selector: 'app-additionalobservations',
  templateUrl: './additionalobservations.page.html',
  styleUrls: ['./additionalobservations.page.scss'],
})
export class AdditionalobservationsPage implements OnInit {
// now get all the values
public latitude: number;
public longitude: number;
public distancetowater: number;
public reappear: number;
public colourathalfdepth: number;

public colourathalfdepthimage: string;

public colouratsurface: number;

public colouratsurfaceimage: string;

public datetime: Date;

  newScore = {  latitude: null, longitude: null, distancetowater: null, reappear: null, colourathalfdepth: null, colourathalfdepthimage: null, colouratsurface: null, colouratsurfaceimage: null, datetimerecorded: null };
  gameScores = [];

  constructor(private storage: Storage, private parseProvider: ParseProvider) { }

  ngOnInit() {

 this.storage.create();

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

        this.storage.get('colourathalfdepthimage').then((val) => {

this.colourathalfdepthimage= val;

  });


    this.storage.get('colouratsurfaceimage').then((val) => {

this.colouratsurfaceimage= val;

  });


this.datetime=new Date();



  }

  async validate() {
    await this.storage.create();

// Send data to Parse server

this.newScore.latitude=this.latitude;
this.newScore.longitude=this.longitude;
this.newScore.distancetowater=this.distancetowater;
this.newScore.reappear=this.reappear;

this.newScore.colourathalfdepth=this.colourathalfdepth;
this.newScore.colourathalfdepthimage=this.colourathalfdepthimage;

this.newScore.colouratsurface=this.colouratsurface;
this.newScore.colouratsurfaceimage=this.colouratsurfaceimage;




this.newScore.datetimerecorded=this.datetime.toString();


this.postGameScore();


  }



 public postGameScore() {
    this.parseProvider.addGameScore(this.newScore).then((gameScore) => {
      this.gameScores.push(gameScore);

      this.newScore.datetimerecorded = null;
this.newScore.distancetowater=null;
this.newScore.reappear=null;
this.newScore.colourathalfdepth=null;
this.newScore.colouratsurface=null;

this.newScore.colourathalfdepthimage=null;
this.newScore.colouratsurfaceimage=null;


      this.newScore.longitude = null;
      this.newScore.latitude = null;
    }, (error) => {
      console.log(error);
      alert('Error adding score.');
    });
  }







}
