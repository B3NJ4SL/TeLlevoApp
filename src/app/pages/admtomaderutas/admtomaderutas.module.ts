import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmtomaderutasPageRoutingModule } from './admtomaderutas-routing.module';

import { AdmtomaderutasPage } from './admtomaderutas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmtomaderutasPageRoutingModule
  ],
  declarations: [AdmtomaderutasPage]
})
export class AdmtomaderutasPageModule {}
