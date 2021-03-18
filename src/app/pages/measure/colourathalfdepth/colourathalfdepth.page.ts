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


  this.storage.get('distancetowater').then((val) => {

    console.log('distancetowater', val);
    this.distancetowater_val=val;
    console.log('secchi depth', (this.reappear_val-this.distancetowater_val));
    this.secchi_depth=this.reappear_val-this.distancetowater_val;
    this.colourathalfdepth=(this.secchi_depth/2)+this.distancetowater_val;
  });



  // secchi depth is reappear-distance to water




  





  }





}
