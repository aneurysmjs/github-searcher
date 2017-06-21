import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * deep linking allow us to access parts of our app through the URL
 */
@IonicPage({
  segment: 'profile' // reflects how we're going to use deep linking in the app
})
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
        <button ion-fab (click)="getUserInformation()">
          <ion-icon name="search"></ion-icon>
        </button>
      </ion-fab>
    </ion-content>
  `
})
export class ProfileSearchPage {

  username: string = '';

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  getUserInformation(): void {
    this.navCtrl.push('ProfileSearchResultsPage', {
      username: this.username
    });
  }

}
