import { Injectable, ErrorHandler } from '@angular/core';
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
    return this.http.get(`${this.baseUrl}/${username}`)
      .do(this.logData)
      .map(this.extractData)
      .do(this.logData)
      .catch(this.errorHandler);
  }

  getUserRepositories(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/repos`)
      .do(this.logData)
      .map(this.extractData)
      .do(this.logData)
      .catch(this.errorHandler);
  }

  private errorHandler(error: Response | any) {
    return Observable.throw(error.json().error || "Server Error");
  }

  private logData(response: Response): void {
    console.log(response);    
  }

  private extractData(response: Response) {
    return response.json();
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
