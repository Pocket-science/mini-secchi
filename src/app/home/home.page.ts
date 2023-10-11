import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Geolocation } from '@capacitor/geolocation';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import * as Parse from 'parse';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isLoggedIn = false;

  user = null;
  username= null;
  latitude_at_start: number;
  longitude_at_start: number;
  constructor(private storage: Storage,


    private router: Router


  ) {




  }

  async openExternalWebsite() {
    const url = 'https://rsg.pml.ac.uk/dashboards/d/P0tWxs97k/monocle-secchi?orgId=1&refresh=5m';
    await Browser.open({ url });
  }












  async ngOnInit() {


    const position = await Geolocation.getCurrentPosition({ enableHighAccuracy: true });

    this.latitude_at_start = position.coords.latitude;
    this.longitude_at_start = position.coords.longitude;


    this.isLoggedIn = !!Parse.User.current();

    this.user = await this.checkUserStatus();


    // store GPS info at start. Compare later
    await this.storage.create();

    this.storage.remove('latitude_at_start');

    this.storage.set('latitude_at_start', this.latitude_at_start).then(result => {
      console.log('Data is saved');
    }).catch(e => {
      console.log("error: " + e);
    });

    this.storage.remove('longitude_at_start');

    this.storage.set('longitude_at_start', this.longitude_at_start).then(result => {
      console.log('Data is saved');
    }).catch(e => {
      console.log("error: " + e);
    });

  }


  async logout() {
    try {
      await Parse.User.logOut();
      this.user = null;
      this.router.navigate(['/login-page']); // Navigate to login page
    } catch (error) {
      console.error('Error logging out', error);
    }
  }

  async checkUserStatus() {
    // Your Parse logic to check if user is logged in
    const user = Parse.User.current();
    return user ? user.getUsername() : null;
  }

}