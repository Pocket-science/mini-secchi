import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreinfoPageRoutingModule } from './moreinfo-routing.module';

import { MoreinfoPage } from './moreinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreinfoPageRoutingModule
  ],
  declarations: [MoreinfoPage]
})
export class MoreinfoPageModule {}
