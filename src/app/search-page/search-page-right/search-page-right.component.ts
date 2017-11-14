import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page-right',
  templateUrl: './search-page-right.component.html',
  styleUrls: ['./search-page-right.component.styl']
})
export class SearchPageRightComponent implements OnInit {

  title = 'what is this?';

  items = [
    'what is that thing?',
    'what is that that thing?'
  ];

  constructor() { }

  ngOnInit() {
  }

}
