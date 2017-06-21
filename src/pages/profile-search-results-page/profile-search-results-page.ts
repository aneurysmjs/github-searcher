import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubService } from "../../providers/github-service";
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

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
      <repositories *ngFor="let repo of repositories" [repository]="repo"></repositories>
    </ion-content>
  `
})
export class ProfileSearchResultsPage {

  username: string;
  user: User;
  repositories: Repository[];

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private githubService: GithubService) {
  }

  // prior to the view actually loading
  ionViewWillLoad(): void {
    this.username = this.navParams.get('username');
    if (this.username) {
      this.getUserInformation();
    }
  }

  getUserInformation(): void {
    /*this.githubService.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
    this.githubService.mockGetRepositoryInformation(this.username).subscribe((data: Repository[]) => this.repositories = data);*/
    this.githubService.getUserInformation(this.username).subscribe((data: User) => this.user = data);
  }

}
