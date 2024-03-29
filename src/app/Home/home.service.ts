import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DecklistService {

  constructor(private http: HttpClient) { }

  getAllPosts(){
    return this.http.get('/decklist').map((posts)=>{
      console.log(posts)
        return posts;
    });
  }

  getCard(name){
    console.log("called");
    return this.http.get('https://api.scryfall.com/cards/named?fuzzy='+name).map((posts)=>{
      console.log(posts)
        return posts;
    });
  }
}