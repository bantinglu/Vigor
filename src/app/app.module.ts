import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { FlexLayoutModule } from '@angular/flex-layout';


import { sideNavModule } from './sideNav/sideNav.module';
import { HomeComponent } from './Home/home.component';
import { DeckListComponent } from './Decklist/decklist.component';
import { DetailsComponent } from './Details/details.component';

import { AppComponent } from './app.component';
import { RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule} from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeckListComponent,
    DetailsComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    sideNavModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent}, 
      {path: 'decklist', component: DeckListComponent}, 
      {path: 'about', component: DetailsComponent}, 
    ]),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
