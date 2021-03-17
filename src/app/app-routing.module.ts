import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'measure',
    loadChildren: () => import('./pages/measure/measure.module').then( m => m.MeasurePageModule)
  },
  {
    path: 'instructions',
    loadChildren: () => import('./pages/instructions/instructions.module').then( m => m.InstructionsPageModule)
  },
  {
    path: 'moreinfo',
    loadChildren: () => import('./pages/moreinfo/moreinfo.module').then( m => m.MoreinfoPageModule)
  },
  {
    path: 'inspectdata',
    loadChildren: () => import('./pages/inspectdata/inspectdata.module').then( m => m.InspectdataPageModule)
  },
  {
    path: 'userprofile',
    loadChildren: () => import('./pages/userprofile/userprofile.module').then( m => m.UserprofilePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
