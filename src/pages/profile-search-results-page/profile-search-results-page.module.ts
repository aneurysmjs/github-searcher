import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSearchResultsPage } from './profile-search-results-page';

@NgModule({
  declarations: [
    ProfileSearchResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearchResultsPage),
  ],
  exports: [
    ProfileSearchResultsPage
  ]
})
export class ProfileSearchResultsPageModule {}
