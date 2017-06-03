import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileSearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile-search-page',
  template: `
    <ion-header>
      <ion-navbar color="dark">
        <ion-title>Profile Search</ion-title>
      </ion-navbar>
    </ion-header>
    
    <ion-content padding>
      <ion-item>
        <ion-label floating>Username</ion-label>
        <ion-input type="text" [(ngModel)]="username"></ion-input>
      </ion-item>
      <ion-fab bottom right>
        <button ion-fab>
          <ion-icon name="search"></ion-icon>
        </button>
      </ion-fab>
    </ion-content>
  `
})
export class ProfileSearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileSearchPage');
  }

}
