import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InspectdataPageRoutingModule } from './inspectdata-routing.module';

import { InspectdataPage } from './inspectdata.page';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InspectdataPageRoutingModule
  ],
  declarations: [InspectdataPage]
})
export class InspectdataPageModule {}
