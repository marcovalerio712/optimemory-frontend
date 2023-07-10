import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Deck } from 'src/app/model/Deck/deck';
import { Flashcard } from 'src/app/model/Flashcard/flashcard';
import { DeckService } from 'src/app/service/DeckService/deck.service';

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.css']
})
export class CreateDeckComponent {

  public deck = new Deck()
  isOnFlashcard: Boolean = false;

  constructor(private service: DeckService, private router: Router) {
    
    this.deck.flashcards = []
    
  }

  addFlashcard(){
    this.isOnFlashcard = true;
  }

  onFlashcardCreated(flashcard : Flashcard) {
    this.deck.flashcards = this.deck.flashcards?.concat(flashcard)
    console.log(this.deck.flashcards)
    this.isOnFlashcard = false;
  }

  onSubmit(){
    this.service.saveDeck(this.deck).subscribe({
      next: (data) => {
        this.deck = new Deck();
      },
      error: (error) => {

      }
    });
  }
}
