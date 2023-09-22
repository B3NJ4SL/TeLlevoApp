import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmtomaderutasPage } from './admtomaderutas.page';

const routes: Routes = [
  {
    path: '',
    component: AdmtomaderutasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmtomaderutasPageRoutingModule {}
