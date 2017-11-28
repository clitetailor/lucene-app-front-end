import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  private host = 'http://localhost:9090';

  private _suggestions = [];

  constructor(private http: HttpClient) { }

  public get suggestions() {
    return this._suggestions;
  }

  public site(path) {
    return [
      this.host,
      ...path.split('/')
    ].join('/');
  }

  public suggest(string: string) {
    if (string === '') {
      return Promise.resolve([]);
    }
    return this.http.get(
      this.site(`suggest/${string}`)
    )
      .toPromise();
  }

  public search(searchString) {
    function debug(arg) {
      console.log(arg);
      return arg;
    }

    return this.http.get(
      this.site(`search/${debug(searchString)}`)
    )
      .toPromise();
  }

  public getSite(id) {
    return this.http.get(
      this.site(`document/${id}`)
    ).toPromise();
  }

  private encodeBase64Unicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode(parseInt('0x' + p1, 16));
      }));
  }
}
