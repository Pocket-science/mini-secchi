import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserMeasurementsPage } from './user-measurements.page';

const routes: Routes = [
  {
    path: '',
    component: UserMeasurementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserMeasurementsPageRoutingModule {}
