import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Deck } from 'src/app/model/Deck/deck';
import { Flashcard } from 'src/app/model/Flashcard/flashcard';
import { DeckService } from 'src/app/service/DeckService/deck.service';
import { CreateFlashcardComponent } from '../create-flashcard/create-flashcard.component';

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.css']
})
export class CreateDeckComponent {


  public deck = new Deck()
  public currentFlashcard: Flashcard | any
  

  isOnFlashcard: Boolean = false;

  constructor(private service: DeckService, private router: Router) {
    
    this.deck.flashcards = []
    
  }

  addFlashcard(){
    this.currentFlashcard = null
    this.isOnFlashcard = true;
  }

  onFlashcardCreated(flashcard : Flashcard) {

    if(this.currentFlashcard != null){
      this.onFlashcardUpdated(flashcard)
    }
    else{
      this.deck.flashcards = this.deck.flashcards?.concat(flashcard)
    }
    
    console.log(this.deck.flashcards)
    this.closeFlashcard()
    
  }

  closeFlashcard() {
    this.currentFlashcard = null
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

  delete(flashcard: Flashcard) {
    this.deck.flashcards?.forEach((element,index)=>{
      if(element==flashcard) this.deck.flashcards?.splice(index,1);
   });
  }

  update(flashcard: Flashcard) {
    this.isOnFlashcard = true;
    this.currentFlashcard = flashcard
  }

  onFlashcardUpdated(flashcard: Flashcard){
    console.log(flashcard)
    this.currentFlashcard = null
  }
}
