import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;


@Component({
  selector: 'app-colouratsurface',
  templateUrl: './colouratsurface.page.html',
  styleUrls: ['./colouratsurface.page.scss'],
})
export class ColouratsurfacePage implements OnInit {
	public colouratsurface:number;
  public phvalue:number;
  public angle_estimated:number;
public PictureTaken:string;



  constructor(private storage: Storage) { }
  async ngOnInit() {



}




async takePicture() {
  try {
    const Picture = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });
    this.PictureTaken = "data:image/jpeg;base64," + Picture.base64String;
   this.storage.set('colouratsurfaceimage', Picture.base64String).then(result => {
console.log('Data is saved');
}).catch(e => {
console.log("error: " + e);
});


  } catch (error) {
    console.error(error);
  }
}





  async validate() {
    await this.storage.create();

this.storage.set('colouratsurface', this.colouratsurface).then(result => {
// console.log('Data is saved');
}).catch(e => {
 console.log("error: " + e);
});


this.storage.set('phvalue', this.phvalue).then(result => {
// console.log('Data is saved');
}).catch(e => {
 console.log("error: " + e);
});

this.storage.set('angle_estimated', this.angle_estimated).then(result => {
// console.log('Data is saved');
}).catch(e => {
 console.log("error: " + e);
});




  }


}