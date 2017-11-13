import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultPageRightComponent } from './search-result-page-right.component';

describe('SearchResultPageRightComponent', () => {
  let component: SearchResultPageRightComponent;
  let fixture: ComponentFixture<SearchResultPageRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultPageRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultPageRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
