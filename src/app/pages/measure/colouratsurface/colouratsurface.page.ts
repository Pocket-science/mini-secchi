import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../../services/photo.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-colouratsurface',
  templateUrl: './colouratsurface.page.html',
  styleUrls: ['./colouratsurface.page.scss'],
})
export class ColouratsurfacePage implements OnInit {

  constructor(private storage: Storage, public photoService: PhotoService) { }

addPhotoToGallery() {
  this.photoService.addNewToGallery();
}

  ngOnInit() {
  }

}
