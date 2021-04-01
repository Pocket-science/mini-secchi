import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../../services/photo.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-colouratsurface',
  templateUrl: './colouratsurface.page.html',
  styleUrls: ['./colouratsurface.page.scss'],
})
export class ColouratsurfacePage implements OnInit {
	public colouratsurface:number;
  newScore = { playerName: null, score: null };
  gameScores = [];



  constructor(private storage: Storage, public photoService: PhotoService) { }
addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
  async ngOnInit() {



}
  async validate() {
    await this.storage.create();

this.storage.set('colouratsurface', this.colouratsurface).then(result => {
// console.log('Data is saved');
}).catch(e => {
 console.log("error: " + e);
});


  }


}