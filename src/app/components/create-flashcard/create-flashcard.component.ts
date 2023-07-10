import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Flashcard } from 'src/app/model/Flashcard/flashcard';

@Component({
  selector: 'create-flashcard',
  templateUrl: './create-flashcard.component.html',
  styleUrls: ['./create-flashcard.component.css']
})
export class CreateFlashcardComponent implements OnInit{

  @Output() newFlashcardEvent = new EventEmitter<Flashcard>();

  flashcard: Flashcard = new Flashcard();

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.newFlashcardEvent.emit(this.flashcard)
    this.flashcard = new Flashcard()
  }

}
