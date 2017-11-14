import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-search-page-right',
  templateUrl: './search-page-right.component.html',
  styleUrls: ['./search-page-right.component.styl']
})
export class SearchPageRightComponent implements OnInit, AfterViewInit {

  title = 'what is this?';

  items = [
    'what is that thing?',
    'what is that that thing?'
  ];

  @ViewChild('searchInput') searchInput;

  searchEnable = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  enableSearch() {
    this.searchEnable = !this.searchEnable;
  }
}
