import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage: Storage) {


  }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();

this.storage.set('user_name', 'Shadman').then(result => {
console.log('Data is saved');
}).catch(e => {
console.log("error: " + e);
});
  this.storage.get('user_name').then((val) => {

    console.log('Your age is', val);

  });



  }



}
