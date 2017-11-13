import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomePageRightComponent } from './home-page/home-page-right/home-page-right.component';
import { HomePageLeftComponent } from './home-page/home-page-left/home-page-left.component';
import { SearchResultPageLeftComponent } from './home-page/search-result-page-left/search-result-page-left.component';
import { SearchResultPageRightComponent } from './home-page/search-result-page-right/search-result-page-right.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: '', component: HomePageLeftComponent, outlet: 'left-side' },
      { path: '', component: HomePageRightComponent, outlet: 'right-side' }
    ]
  },
  {
    path: 'search',
    component: HomePageComponent,
    children: [
      { path: '', component: SearchResultPageLeftComponent, outlet: 'left-side' },
      { path: '', component: SearchResultPageRightComponent, outlet: 'right-side' }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageRightComponent,
    HomePageLeftComponent,
    SearchResultPageLeftComponent,
    SearchResultPageRightComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
