import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService implements OnInit {
  private host = 'http://localhost:9090';

  public suggestionSubscription = new AsyncSubject<String>();
  public searchResultSubscription = new AsyncSubject<String>();

  constructor(private http: HttpClient) { }

  public ngOnInit() {
    this.suggestionSubscription
      .debounceTime(200)
      .mergeMap(rawString => this.suggest(rawString));

    this.searchResultSubscription
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
    );
  }

  private search(searchString: String) {
    function debug(arg) {
      console.log(arg);
      return arg;
    }

    return this.http.get(
      this.site(`search/${debug(searchString)}`)
    );
  }

  private encodeBase64Unicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode(parseInt('0x' + p1, 16));
      }));
  }
}
