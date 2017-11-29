import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageRightComponent } from './home-page/home-page-right/home-page-right.component';
import { HomePageLeftComponent } from './home-page/home-page-left/home-page-left.component';
import { SearchPageLeftComponent } from './search-page/search-page-left/search-page-left.component';
import { SearchPageRightComponent } from './search-page/search-page-right/search-page-right.component';
import { SearchDropdownComponent } from './search-page/search-page-right/search-dropdown/search-dropdown.component';
import { SearchResultComponent } from './search-page/search-page-right/search-result/search-result.component';
import { CommonModule } from '@angular/common/src/common_module';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';
import { SitePageComponent } from './search-page/search-page-right/site-page/site-page.component';
import { SearchInputComponent } from './search-page/search-page-right/search-input/search-input.component';

const appRoutes: Routes = [
  { path: '', component: HomePageLeftComponent, outlet: 'left-side' },
  { path: '', component: HomePageRightComponent, outlet: 'right-side' },
  { path: 'search-page', component: SearchPageRightComponent, outlet: 'right-side' },
  { path: 'statistic', component: SearchPageLeftComponent, outlet: 'left-side' },
  { path: 'site-page/:id', component: SitePageComponent, outlet: 'right-side' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageRightComponent,
    HomePageLeftComponent,
    SearchPageLeftComponent,
    SearchPageRightComponent,
    SearchDropdownComponent,
    SearchResultComponent,
    SitePageComponent,
    SearchInputComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    SearchService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
