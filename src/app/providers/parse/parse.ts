import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

// Parse
import { Parse } from 'parse';

// Constants
import { ENV } from '../../../app/app.constant';

@Injectable()
export class ParseProvider {
  private parseAppId: string = ENV.parseAppId;
  private parseServerUrl: string = ENV.parseServerUrl;
  private parseJSKey: string=ENV.parseJSKey;

  constructor() {
    this.parseInitialize();
    console.log('Initiated Parse');
  }

  public getGameScores(offset: number = 0, limit: number = 3): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const GameScore = Parse.Object.extend('Secchi_data');
        let query = new Parse.Query(GameScore);
        query.skip(offset);
        query.limit(limit);
        query.find().then((gameScores) => {
          resolve(gameScores);
        }, (error) => {
          reject(error);
        });
      }, 500);
    });
  }

  public addGameScore(newScore): Promise<any> {
    const GameScore = Parse.Object.extend('secchi_data');
    
    let gameScore = new GameScore();
    gameScore.set('latitude', (newScore.latitude));
    gameScore.set('longitude',(newScore.longitude));
    gameScore.set('distancetowater', newScore.distancetowater);
    gameScore.set('reappear', newScore.reappear);
    gameScore.set('colourathalfdepth', newScore.colourathalfdepth);
    gameScore.set('colouratsurface', newScore.colouratsurface);
    gameScore.set('datetimerecorded', newScore.datetimerecorded);


    return gameScore.save(null, {
      success: function (gameScore) {
        console.log(gameScore);
        return gameScore;
      },
      error: function (gameScore, error) {
        console.log(error);
        return error;
      }
    });
  }


  private parseInitialize() {
    Parse.initialize(this.parseAppId, this.parseJSKey);
    Parse.serverURL = this.parseServerUrl;
    
  }

}