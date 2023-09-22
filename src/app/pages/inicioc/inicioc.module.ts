import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciocPageRoutingModule } from './inicioc-routing.module';

import { IniciocPage } from './inicioc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciocPageRoutingModule
  ],
  declarations: [IniciocPage]
})
export class IniciocPageModule {}
