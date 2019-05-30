import { Component } from '@angular/core';
import { DecklistService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:  [ DecklistService ]
})
export class HomeComponent {
  main: any = [];
  side: any = [];
  main_white : any = [];
  side_white : any = [];
  imageSource : any;

  constructor(private decklistService: DecklistService) { }
  ngOnInit(){
    this.decklistService.getAllPosts().subscribe(posts=>{
      this.main = posts["karn"]["main"];
      this.side = posts["karn"]["side"];

      this.main_white = posts["white"]["main"];
      this.side_white = posts["white"]["side"];
    });
  }

  public executeSelectedChange = (event) => {
    this.imageSource = "assets/cardBack.jpg";
    console.log(event);
  }

  public displayCard = (name) =>{
    this.decklistService.getCard(name).subscribe(card=>{
      this.imageSource = card['image_uris']['large'];
    });
  }
  public click = () =>{
    console.log("click");
  }
}
