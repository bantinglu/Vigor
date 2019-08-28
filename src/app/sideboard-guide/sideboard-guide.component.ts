import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sideboard-guide',
  templateUrl: './sideboard-guide.component.html',
  styleUrls: ['./sideboard-guide.component.css']
})
export class SideboardGuideComponent implements OnInit {
  test = [{
    "id": "One",
    "deck": "humans",
    "desc": "The Humans Matchup revolves controlling the board and then turning " +
            "with a titan or a really large walking ballista. You will keep the board clear using engineered explsoives. " +
            "Be wary of reflector mage on titan or them copying the titan with a phantasmal image. Phantasmal Image can be killed with your slayer's stronghold. " +
            "Board in anything that can control the board (EE, path, Hornet Queen)"
  },{
    "id": "Two",
    "deck": "phoenix",
    "desc": "dont get bursted or blood mooned"
  }];
  constructor() { }

  ngOnInit() {
  }

}
