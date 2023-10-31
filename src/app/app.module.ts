import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as Parse from 'parse';
import { ENV } from './app.constant'; // your constant file

Parse.initialize(ENV.parseAppId, ENV.parseJSKey);
(Parse as any).serverURL = ENV.parseServerUrl; 

Parse.initialize(ENV.parsePMLAppId, ENV.parsePMLJSKey);
(Parse as any).serverURL = ENV.parsePMLServerUrl; 


Parse.enableLocalDatastore();


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot()
, AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
