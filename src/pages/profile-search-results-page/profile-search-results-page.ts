import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubService } from "../../providers/github-service";
import { User } from '../../models/user.interface';

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
      <search-results [user]="user"></search-results>
    </ion-content>
  `
})
export class ProfileSearchResultsPage {

  username: string;
  user: User;

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
    this.githubService.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
  }

}
