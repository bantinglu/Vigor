import { Component } from '@angular/core';

import { DecklistService} from './decklist.service';


@Component({
  selector: 'decklist',
  templateUrl: './decklist.component.html',
  styleUrls: ['./decklist.component.css'],
  providers: [DecklistService]
})
export class DeckListComponent {
  
  posts: any = [];

  constructor(private decklistService: DecklistService) { }

  ngOnInit(){
    this.decklistService.getAllPosts().subscribe(posts=>{
      this.posts = posts;
    });
  }
}
