import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForthPage } from './forth.page';

const routes: Routes = [
  {
    path: '',
    component: ForthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForthPageRoutingModule {}
