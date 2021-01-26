import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForthPageRoutingModule } from './forth-routing.module';

import { ForthPage } from './forth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForthPageRoutingModule
  ],
  declarations: [ForthPage]
})
export class ForthPageModule {}
