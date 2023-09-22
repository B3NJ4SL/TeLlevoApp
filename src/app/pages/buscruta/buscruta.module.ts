import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscrutaPageRoutingModule } from './buscruta-routing.module';

import { BuscrutaPage } from './buscruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscrutaPageRoutingModule
  ],
  declarations: [BuscrutaPage]
})
export class BuscrutaPageModule {}
