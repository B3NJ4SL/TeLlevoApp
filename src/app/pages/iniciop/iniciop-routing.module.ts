import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciopPage } from './iniciop.page';

const routes: Routes = [
  {
    path: '',
    component: IniciopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciopPageRoutingModule {}
