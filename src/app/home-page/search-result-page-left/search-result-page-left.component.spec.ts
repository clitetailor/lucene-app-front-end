import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultPageLeftComponent } from './search-result-page-left.component';

describe('SearchResultPageLeftComponent', () => {
  let component: SearchResultPageLeftComponent;
  let fixture: ComponentFixture<SearchResultPageLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultPageLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultPageLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
