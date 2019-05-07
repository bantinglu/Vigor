import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './Home/home.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
