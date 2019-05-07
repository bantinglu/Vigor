import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule  } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule  
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule 
  ]
})
export class MaterialModule { }
