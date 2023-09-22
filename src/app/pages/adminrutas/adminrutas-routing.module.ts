import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminrutasPage } from './adminrutas.page';

const routes: Routes = [
  {
    path: '',
    component: AdminrutasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminrutasPageRoutingModule {}
