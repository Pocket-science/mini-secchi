import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserMeasurementsPageRoutingModule } from './user-measurements-routing.module';

import { UserMeasurementsPage } from './user-measurements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserMeasurementsPageRoutingModule
  ],
  declarations: [UserMeasurementsPage]
})
export class UserMeasurementsPageModule {}
