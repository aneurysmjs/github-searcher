import { Component, Input } from '@angular/core';
import { User } from '../../models/user.interface';

@Component({
  selector: 'search-results',
  template: `
    <ion-item *ngIf="user" text-wrap>
      <ion-avatar item-left>
        <img [src]="user.avatar_url">
        <h2>{{user.name}}</h2>
        <h3>{{user.company}}</h3>
        <p>{{user.location}}</p>
      </ion-avatar>
    </ion-item>
  `
})
export class SearchResultsComponent {

  @Input() user: User;

  constructor() {
    console.log('Hello SearchResults Component');
  }

}
