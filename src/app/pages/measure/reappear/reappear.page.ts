import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-reappear',
  templateUrl: './reappear.page.html',
  styleUrls: ['./reappear.page.scss'],
})
export class ReappearPage implements OnInit {
  public reappear: number;

  constructor(private storage: Storage) { }

  ngOnInit() {
  }

    async validate() {
    await this.storage.create();

this.storage.set('reappear', this.reappear).then(result => {
console.log('Data is saved');
}).catch(e => {
console.log("error: " + e);
});
  this.storage.get('reappear').then((val) => {

    console.log('reappear', val);

  });

  }

}
