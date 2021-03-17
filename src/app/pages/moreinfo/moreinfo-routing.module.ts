import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreinfoPage } from './moreinfo.page';

const routes: Routes = [
  {
    path: '',
    component: MoreinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreinfoPageRoutingModule {}
