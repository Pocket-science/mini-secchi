import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {


    
  }

  async openExternalWebsite() {
    const url = 'https://rsg.pml.ac.uk/dashboards/d/P0tWxs97k/monocle-secchi?orgId=1&refresh=5m';
    await Browser.open({ url });
  }












  async ngOnInit() {







  



}
}