import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Geolocation} from '@capacitor/core';
import { ParseProvider } from '../providers/parse/parse';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  latitude: number;
longitude: number;
  newScore = { playerName: null, score: null };
  gameScores = [];


  constructor(private storage: Storage, private parseProvider: ParseProvider) {
  this.getLocation();

 this.newScore = { playerName: 'a', score: 0 };
  }

  async getLocation() {
  const position = await Geolocation.getCurrentPosition();
  this.latitude = position.coords.latitude;
  this.longitude = position.coords.longitude;
}

  public postGameScore() {
    this.parseProvider.addGameScore(this.newScore).then((gameScore) => {
      this.gameScores.push(gameScore);
      this.newScore.playerName = null;
      this.newScore.score = null;
    }, (error) => {
      console.log(error);
      alert('Error adding score.');
    });
  }



  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();


this.storage.set('latitude', this.latitude).then(result => {
console.log('Data is saved');
}).catch(e => {
console.log("error: " + e);
});
  

this.storage.set('longitude', this.longitude).then(result => {
console.log('Data is saved');
}).catch(e => {
console.log("error: " + e);
});


    // now save it to 
  }


  



}
