import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-qccheck',
  templateUrl: './qccheck.page.html',
  styleUrls: ['./qccheck.page.scss'],
})
export class QccheckPage implements OnInit {

constructor(private storage: Storage) {}
  ngOnInit() {

     this.storage.create();

  }

}
