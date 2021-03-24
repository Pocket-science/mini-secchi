import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ParseProvider } from '../../../providers/parse/parse';



@Component({
  selector: 'app-additionalobservations',
  templateUrl: './additionalobservations.page.html',
  styleUrls: ['./additionalobservations.page.scss'],
})
export class AdditionalobservationsPage implements OnInit {

  constructor(private storage: Storage, private parseProvider: ParseProvider) { }

  ngOnInit() {
  }

  async validate() {
    await this.storage.create();

let items=[];
return new Promise(resolve=>{
this.storage.forEach((v,k)=>{
console.log('value',v);
console.log('key',k);
items.push(v);
}).then(()=>{
resolve(items);
})
})
/*
this.storage.set('distancetowater', this.distancetowater).then(result => {
console.log('Data is saved');


}).catch(e => {
console.log("error: " + e);
});
  this.storage.get('distancetowater').then((val) => {

    console.log('Distance to water', val);

  });
*/







    // now save it to 
  }

}
