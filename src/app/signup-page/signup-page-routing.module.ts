import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupPagePage } from './signup-page.page';

const routes: Routes = [
  {
    path: '',
    component: SignupPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupPagePageRoutingModule {}
