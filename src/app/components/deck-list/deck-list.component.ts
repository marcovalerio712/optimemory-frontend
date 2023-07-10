import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/app/model/Deck/deck';
import { Student } from 'src/app/model/Student/student';
import { DeckService } from 'src/app/service/DeckService/deck.service';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent implements OnInit{

  deckList?: Deck[]

  constructor(private service: DeckService) {
    
    
  }

  ngOnInit(): void {
    this.service.getCatalogueDecks().subscribe({
        next: data => {this.deckList = data},
        error: (err) => console.log(err)
      }
    )
  }

}
