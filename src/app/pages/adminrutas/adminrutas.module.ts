import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminrutasPageRoutingModule } from './adminrutas-routing.module';

import { AdminrutasPage } from './adminrutas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminrutasPageRoutingModule
  ],
  declarations: [AdminrutasPage]
})
export class AdminrutasPageModule {}
