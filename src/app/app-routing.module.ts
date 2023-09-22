import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pag1',
    loadChildren: () => import('./pages/pag1/pag1.module').then( m => m.Pag1PageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperacion',
    loadChildren: () => import('./pages/recuperacion/recuperacion.module').then( m => m.RecuperacionPageModule)
  },
  {
    path: 'inicioc',
    loadChildren: () => import('./pages/inicioc/inicioc.module').then( m => m.IniciocPageModule)
  },
  {
    path: 'iniciop',
    loadChildren: () => import('./pages/iniciop/iniciop.module').then( m => m.IniciopPageModule)
  },
  {
    path: 'registroruta',
    loadChildren: () => import('./pages/registroruta/registroruta.module').then( m => m.RegistrorutaPageModule)
  },
  {
    path: 'adminrutas',
    loadChildren: () => import('./pages/adminrutas/adminrutas.module').then( m => m.AdminrutasPageModule)
  },
  {
    path: 'informes',
    loadChildren: () => import('./pages/informes/informes.module').then( m => m.InformesPageModule)
  },
  {
    path: 'ganancia',
    loadChildren: () => import('./pages/ganancia/ganancia.module').then( m => m.GananciaPageModule)
  },
  {
    path: 'buscruta',
    loadChildren: () => import('./pages/buscruta/buscruta.module').then( m => m.BuscrutaPageModule)
  },
  {
    path: 'admtomaderutas',
    loadChildren: () => import('./pages/admtomaderutas/admtomaderutas.module').then( m => m.AdmtomaderutasPageModule)
  },
  {
    path: 'infogen',
    loadChildren: () => import('./pages/infogen/infogen.module').then( m => m.InfogenPageModule)
  },
  {
    path: 'coments',
    loadChildren: () => import('./pages/coments/coments.module').then( m => m.ComentsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
