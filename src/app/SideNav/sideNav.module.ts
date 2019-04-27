import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule} from '@angular/material';

import { sideNavComponent } from './sideNav.component';
import { RouterModule, Routes} from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    sideNavComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatNativeDateModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [sideNavComponent]
})
export class sideNavModule {
  showFiller = false;
}
