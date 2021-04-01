import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { PhotoService } from '../../../services/photo.service';

@Component({
  selector: 'app-colourathalfdepth',
  templateUrl: './colourathalfdepth.page.html',
  styleUrls: ['./colourathalfdepth.page.scss'],
})
export class ColourathalfdepthPage implements OnInit {
public reappear_val:number;
public distancetowater_val: number;
public secchi_depth:number;
public colourathalfdepth:number;
public halfdepth:number;


  constructor(private storage: Storage, public photoService: PhotoService) { }
addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
  async ngOnInit() {


    await this.storage.create();

  this.storage.get('reappear').then((val) => {

    console.log('reappear', val);
    this.reappear_val=val;

  });


}
  async validate() {
  //  alert(`hola ${this.distancetowater}!`);
    await this.storage.create();

this.storage.set('colourathalfdepth', this.colourathalfdepth).then(result => {
// console.log('Data is saved');
}).catch(e => {
 console.log("error: " + e);
});
  this.storage.get('distancetowater').then((val) => {

    this.distancetowater_val=val;
    this.secchi_depth=this.reappear_val-this.distancetowater_val;
    this.halfdepth=(this.secchi_depth/2)+this.distancetowater_val;
  });






  }





}
