import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrorutaPageRoutingModule } from './registroruta-routing.module';

import { RegistrorutaPage } from './registroruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrorutaPageRoutingModule
  ],
  declarations: [RegistrorutaPage]
})
export class RegistrorutaPageModule {}
