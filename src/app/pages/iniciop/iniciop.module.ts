import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciopPageRoutingModule } from './iniciop-routing.module';

import { IniciopPage } from './iniciop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciopPageRoutingModule
  ],
  declarations: [IniciopPage]
})
export class IniciopPageModule {}
