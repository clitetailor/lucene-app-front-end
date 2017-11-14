import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-search-page-right',
  templateUrl: './search-page-right.component.html',
  styleUrls: ['./search-page-right.component.styl']
})
export class SearchPageRightComponent implements OnInit {

  snippet = '';

  dropdownList = [
    'what are you thinking?',
    'what do you think?'
  ];

  searchFieldActive = false;
  searchConfirmed = false;

  results = [];

  @ViewChild('searchInput') searchInput: ElementRef;
  @HostListener('window:keydown.esc') onEscapeButtonClick() {
    this.closeSearchField();
  }

  constructor() { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.results = []
  }

  openSearchField() {
    this.searchFieldActive = true;
    this.searchInput.nativeElement.focus();
  }

  closeSearchField() {
    this.searchFieldActive = false;
  }

  confirm() {

  }
}
