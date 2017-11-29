import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../../search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.styl']
})
export class SearchResultComponent implements OnInit {

  content: any = undefined;
  @Input('results') results = [];

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  isAbleToShow() {
    return Array.isArray(this.results) && this.results.length > 0;
  }

  navigateToSite(id) {
    this.searchService.getSite(id)
      .then(content => {
        this.content = content;
        console.log(content);
      });
  }
}
