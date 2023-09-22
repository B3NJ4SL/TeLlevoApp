import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciocPage } from './inicioc.page';

const routes: Routes = [
  {
    path: '',
    component: IniciocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciocPageRoutingModule {}
