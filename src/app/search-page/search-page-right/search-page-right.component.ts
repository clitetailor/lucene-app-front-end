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

  dropdownList = [];

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

  public onKeyDown($event: KeyboardEvent) {
    this.checkSnippet($event);

    if ($event.key.toLowerCase() === 'enter') {
      this.search();
    }

    if ($event.key.toLowerCase() === 'tab') {
      this.autocomplete();
    }
  }

  public onKeyUp($event: KeyboardEvent) {
    this.checkSnippet($event);

    this.suggest();
  }

  public onKeyPress($event: KeyboardEvent) {
    this.checkSnippet($event);
  }

  private checkSnippet($event: KeyboardEvent) {
    const input: HTMLInputElement = this.searchInput.nativeElement,
      matchPos = this.snippet.indexOf(input.value);

    if (input.value.length === 0) {
      this.clearSnippet();
    }

    if (
      input.value.length === 1 && $event.key.toLowerCase() === 'backspace'
      || this.snippet.length > 0 && matchPos !== 0
    ) {
      this.clearSnippet();
    }
  }

  private clearSnippet() {
    const input: HTMLInputElement = this.searchInput.nativeElement;

    this.snippet = '';
  }

  private suggest() {
    this.searchService.suggestionSubscription.next(
      this.searchInput
        .nativeElement
        .value
    );
  }

  private search() {
    this.searchService.searchResultSubscription.next(
      this.searchInput
        .nativeElement
        .value
    );
  }

  private openSearchField() {
    this.searchFieldActive = true;
    this.searchInput.nativeElement.focus();
  }

  private closeSearchField() {
    this.searchFieldActive = false;
  }

  private autocomplete() {
    const input: HTMLInputElement = this.searchInput.nativeElement;
    if (input.value && this.snippet.length > input.value.length) {
      input.value = this.snippet;
      this.clearSnippet();
      input.focus();

      this.suggest();
    }
  }

  private confirm() {

  }
}
