import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of'; // allows to create an observable of values

import { User } from '../models/user.interface';
/**
 * so with the `of` operator, we're going to create
 * an observable of `USER_LIST` array.
 */
import { USER_LIST } from '../mocks/user.mocks';

@Injectable()
export class GithubService {

  constructor() {
    console.log('Hello GithubService Provider');
  }

  mockGetUserInformation(username: string): Observable<User> {
    console.log(`username`);
    console.log(username);
    // create an observable of this values
    return Observable.of(USER_LIST.filter(({name}) => name === username)[0]);
  }

}
