import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

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

  searchFieldActive = false;
  searchConfirmed = false;

  @ViewChild('searchInput') searchInput: ElementRef;
  @HostListener('keydown.esc') onEscapeButtonClick() {
    this.closeSearchField();
  }

  constructor() { }

  ngOnInit() {
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
