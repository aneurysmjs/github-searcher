import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile-search-results-page',
  template:  `
    <ion-header>
      <ion-navbar color="dark">
        <ion-title>profileSearchResultsPage</ion-title>
      </ion-navbar>
    </ion-header>
    
    <ion-content padding>

    </ion-content>
  `
})
export class ProfileSearchResultsPage {

  username: string;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  // prior to the view actually loading
  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    console.log(`this.username`);
    console.log(this.username);
  }

}
