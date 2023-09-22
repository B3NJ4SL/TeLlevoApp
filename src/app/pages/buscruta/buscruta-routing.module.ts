import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscrutaPage } from './buscruta.page';

const routes: Routes = [
  {
    path: '',
    component: BuscrutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscrutaPageRoutingModule {}
