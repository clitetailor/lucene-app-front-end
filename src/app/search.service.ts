import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchService {
  private host = 'http://localhost:9090';

  public suggestionSubject = new Subject<String>();
  public searchResultSubject = new Subject<String>();

  public suggestionObservable: Observable<any>;
  public searchResultObservable: Observable<any>;

  constructor(private http: HttpClient) {
    this.suggestionObservable =
      this.suggestionSubject
        .debounceTime(200)
        .mergeMap(rawString => {
          console.log(rawString);
          return this.suggest(rawString);
        });

    this.searchResultObservable =
      this.searchResultSubject
        .debounceTime(200)
        .mergeMap(rawString => this.search(rawString));
  }

  public site(path) {
    return [
      this.host,
      ...path.split('/')
    ].join('/');
  }

  public getSite(id) {
    return this.http.get(
      this.site(`document/${id}`)
    )
      .toPromise();
  }

  private suggest(string: String): Observable<any> {
    return this.http.get(
      this.site(`suggest/${string}`)
    )
      .catch(err => {
        return new Subject();
      });
  }

  private search(searchString: String) {
    function debug(arg) {
      console.log(arg);
      return arg;
    }

    return this.http.get(
      this.site(`search/${debug(searchString)}`)
    )
      .catch(err => {
        return new Subject();
      });
  }

  private encodeBase64Unicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode(parseInt('0x' + p1, 16));
      }));
  }
}
