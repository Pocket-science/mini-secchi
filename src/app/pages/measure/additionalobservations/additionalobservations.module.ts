import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdditionalobservationsPageRoutingModule } from './additionalobservations-routing.module';

import { AdditionalobservationsPage } from './additionalobservations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdditionalobservationsPageRoutingModule
  ],
  declarations: [AdditionalobservationsPage]
})
export class AdditionalobservationsPageModule {}
