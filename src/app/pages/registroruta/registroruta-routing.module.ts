import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrorutaPage } from './registroruta.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrorutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrorutaPageRoutingModule {}
