import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubService } from "../../providers/github-service";

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

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private githubService: GithubService) {
  }

  // prior to the view actually loading
  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if (this.username) {
      this.getUserInformation();
    }
  }

  getUserInformation() {
    this.githubService.mockGetUserInformation(this.username).subscribe(data => console.log(data))
  }

}
