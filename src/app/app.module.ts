import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageRightComponent } from './home-page-right/home-page-right.component';
import { HomePageLeftComponent } from './home-page-left/home-page-left.component';

const appRoutes: Routes = [
  { path: '', component: HomePageRightComponent, outlet: 'right-side' },
  { path: '', component: HomePageLeftComponent, outlet: 'left-side' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageRightComponent,
    HomePageLeftComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
