import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  user = {
    name: '',
    pw: ''
  };

  constructor(private auth: AuthService, public route: Router, public alertCtrl: AlertController, public apComp: AppComponent) { }

  ngOnInit() {
  }

  loginUser() {
    this.auth.login(this.user.name, this.user.pw).then(success => {
      if (success == (this.auth.currentUser.role == 0)) {
        this.route.navigateByUrl('/admin');
        this.apComp.pages = [
          {
            title: 'First Page',
            url: '/first'
          },
          {
            title: 'Third Page',
            url: '/third'
          }
        ];
      }
      else if (success == (this.auth.currentUser.role == 1)) {
        this.route.navigateByUrl('/user');
        this.apComp.pages = [
          {
            title: 'Second Page',
            url: '/second'
          },
          {
            title: 'Forth Page',
            url: '/forth'
          }
        ];
      }
    }).catch(err => {
      this.presentAlert();
    });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      subHeader: 'Login Failed',
      message: 'Username or Password maybe incorrect.',
      buttons: ['OK']
    });
    await alert.present();
  }

}
