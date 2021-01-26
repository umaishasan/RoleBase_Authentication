import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirstModalPage } from '../first-modal/first-modal.page';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(private modlCtrl:ModalController) { }

  ngOnInit() {
  }

  async presenrModal(){
    const modal = await this.modlCtrl.create({
      component: FirstModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
