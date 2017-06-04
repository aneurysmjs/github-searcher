import { Component, Input } from '@angular/core';
import { Repository } from '../../models/repository.interface';

@Component({
  selector: 'repositories',
  template: `    
    <ion-card>
      <ion-card-header>
        <ion-card-title>
          {{repository.name}}
        </ion-card-title>
      </ion-card-header>
      <ion-card-content>
        {{repository.description}}
      </ion-card-content>
    </ion-card>
  `
})
export class RepositoriesComponent {

  @Input() repository: Repository;

}
