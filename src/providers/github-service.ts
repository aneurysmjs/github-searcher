import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do'; // This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
import 'rxjs/add/observable/of'; // allows to create an observable of values
import 'rxjs/add/observable/throw';

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

  private baseUrl: string = `https://api.github.com/users`;

  constructor(private http: Http) {

  }

  /**
   *
   * @param username
   * @return {Observable}
   */
  getUserInformation(username: string): Observable<User> {
    console.log('user', username);
    return this.http.get(`${this.baseUrl}/${username}`)
    /**
     * before start changing the data, for example 
     * changing it and return data.json() is actually
     * log pit the response before we do anything to it
     * and it can be done by import the RxJs's `do` operator
     */
      .do((data: Response) => console.log(data))
      .map((data: Response) => data.json())
      .do((data: Response) => console.log(data))
      .catch((error: Response) => Observable.throw(error.json().error || "Server Error"));
  }

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
