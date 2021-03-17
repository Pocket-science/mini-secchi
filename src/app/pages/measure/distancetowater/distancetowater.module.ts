import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistancetowaterPageRoutingModule } from './distancetowater-routing.module';

import { DistancetowaterPage } from './distancetowater.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistancetowaterPageRoutingModule
  ],
  declarations: [DistancetowaterPage]
})
export class DistancetowaterPageModule {}
