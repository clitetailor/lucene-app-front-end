import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.styl']
})
export class SearchResultComponent implements OnInit {

  @Input('results') results = [];

  constructor() { }

  ngOnInit() {
  }

  isAbleToShow() {
    return Array.isArray(this.results) && this.results.length > 0;
  }
}
