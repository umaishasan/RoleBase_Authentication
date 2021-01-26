import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {

  //initialize pages
  public pages = [];
  //furqan approach
  // public adminPages=[{title: 'First Page',url: '/first'}];
  // public userPages=[{title: 'Second Page',url: '/second'}];

  //import objects.
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private menuCtrl: MenuController,
    public routes: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  //write this method.
  ngOnInit() {
    // this.setUpSideMenuPages();
    
  }
  // setUpSideMenuPages() {
  //   if (this.auth.isAdmin) {
  //     this.adminPages;
  //   }
  //   if (this.auth.isUser) {
  //     this.pages = this.userPages;
  //   }
  // }

  //write this code
  signOut() {
    this.auth.logout();
    this.menuCtrl.enable(false);
    this.routes.navigateByUrl('/login');
  }
}
