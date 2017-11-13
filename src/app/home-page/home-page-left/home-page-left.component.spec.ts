import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageLeftComponent } from './home-page-left.component';

describe('HomePageLeftComponent', () => {
  let component: HomePageLeftComponent;
  let fixture: ComponentFixture<HomePageLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
