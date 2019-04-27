import { Component } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './sideNav.component.html',
  styleUrls: ['./sideNav.component.css']
})
export class sideNavComponent {
  events: string[] = [];
  opened: boolean;
  

  constructor() {
  
  }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
