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
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'auth/signup',
    loadChildren: () => import('./pages/auth/signup/signup.module').then( m => m.SignupPageModule)
  },

  {
    path: 'auth/forgot-password',
    loadChildren: () => import('./pages/auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
