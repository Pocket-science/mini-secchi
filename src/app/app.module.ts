import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as Parse from 'parse';
import { ENV } from './app.constant'; // your constant file
import { LeafletMapComponent } from './components/leaflet-map/leaflet-map.component';

Parse.initialize(ENV.parseAppId, ENV.parseJSKey);
(Parse as any).serverURL = ENV.parseServerUrl; 



Parse.enableLocalDatastore();


@NgModule({
  declarations: [AppComponent, LeafletMapComponent],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot()
, AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
