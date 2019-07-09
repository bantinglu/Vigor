import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { MaterialModule } from './../material/material.module'

@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      BrowserModule,
      MaterialModule
      
    ],
    exports: []
  })
  export class HomeModule {
  }
  