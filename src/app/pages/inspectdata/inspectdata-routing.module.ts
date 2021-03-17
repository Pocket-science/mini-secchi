import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InspectdataPage } from './inspectdata.page';

const routes: Routes = [
  {
    path: '',
    component: InspectdataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspectdataPageRoutingModule {}
