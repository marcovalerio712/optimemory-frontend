import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flashcard } from 'src/app/model/Flashcard/flashcard';
import { Subject } from 'src/app/model/Subject/subject';
import { SubjectService } from 'src/app/service/SubjectService/subject.service';

@Component({
  selector: 'create-flashcard',
  templateUrl: './create-flashcard.component.html',
  styleUrls: ['./create-flashcard.component.css']
})
export class CreateFlashcardComponent implements OnInit{

  @Input() title? : string;
  @Output() newFlashcardEvent = new EventEmitter<Flashcard>();

  flashcard: Flashcard = new Flashcard();
  subjects: Subject[] = []

  constructor(private subjService : SubjectService) {
    
  }

  ngOnInit(): void {
    
    this.subjService.getSubjects().subscribe({
      next: data => this.subjects = data,
      error: (error)=> console.log(error)
    })

  }

  onSubmit() {
    this.newFlashcardEvent.emit(this.flashcard)
    this.flashcard = new Flashcard()
  }

}
