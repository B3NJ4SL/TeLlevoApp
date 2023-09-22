import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfogenPage } from './infogen.page';

const routes: Routes = [
  {
    path: '',
    component: InfogenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfogenPageRoutingModule {}
