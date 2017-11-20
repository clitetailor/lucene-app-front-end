import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-search-page-right',
  templateUrl: './search-page-right.component.html',
  styleUrls: ['./search-page-right.component.styl']
})
export class SearchPageRightComponent implements OnInit, AfterViewInit {

  snippet = '';

  dropdownList = [
    'what are you thinking?',
    'what do you think?'
  ];

  searchFieldActive = false;
  searchConfirmed = false;

  results = [];

  debounce;

  @ViewChild('searchInput') searchInput: ElementRef;
  @HostListener('window:keydown.esc') onEscapeButtonClick() {
    this.closeSearchField();
  }

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.initialize();
  }

  ngAfterViewInit() { }

  initialize() {
    this.results = [];
  }

  suggest() {
    this.searchService.suggest(
      this.searchInput
        .nativeElement
        .value
    )
      .subscribe((res: string[]) => {
        this.dropdownList = res;
        console.log(res);
      }, err => console.error(err));
  }

  search() {
    this.searchService.search(
      this.searchInput
        .nativeElement
        .value
    )
      .then((res: any[]) => {
        console.log(res);
        this.results = res;
      });
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
