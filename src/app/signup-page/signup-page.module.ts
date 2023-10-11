import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPagePageRoutingModule } from './signup-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupPagePage } from './signup-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    SignupPagePageRoutingModule
  ],
  declarations: [SignupPagePage]
})
export class SignupPagePageModule {}
