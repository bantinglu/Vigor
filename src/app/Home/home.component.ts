import { Component } from '@angular/core';
import { DecklistService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:  [ DecklistService ]
})
export class HomeComponent {
  posts: any = [];

  constructor(private decklistService: DecklistService) { }
  ngOnInit(){
    this.decklistService.getAllPosts().subscribe(posts=>{
      this.posts = posts;
    });
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }
}
