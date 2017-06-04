import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of'; // allows to create an observable of values

import { User } from '../models/user.interface';
import { Repository } from '../models/repository.interface';
/**
 * so with the `of` operator, we're going to create
 * an observable of `USER_LIST` array.
 */
import { USER_LIST } from '../mocks/user.mocks';
import { REPOSITORY_LIST } from '../mocks/repository.mocks';

@Injectable()
export class GithubService {

  /**
   *
   * @param {String} username
   * @return {Observable}
   */
  mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(({owner}) => owner.name === username));
  }

  /**
   *
   * @param {String} username
   * @return {Observable}
   */
  mockGetUserInformation(username: string): Observable<User> {
    // create an observable of this values
    return Observable.of(USER_LIST.filter(({name}) => name === username)[0]);
  }

}
