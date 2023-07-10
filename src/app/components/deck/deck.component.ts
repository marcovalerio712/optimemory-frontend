import { Component, Input, OnInit } from '@angular/core';
import { Deck } from 'src/app/model/Deck/deck';
import { Student } from 'src/app/model/Student/student';
import { DeckService } from 'src/app/service/DeckService/deck.service';
import { StudentService } from 'src/app/service/StudentService/student.service';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit{

  
  @Input() deck?: Deck;
  @Input() catalog: boolean = false;

  constructor(private sService: StudentService, private dService: DeckService){

  }

  ngOnInit(): void {
    
  }

  isMyDeck(){
    var sData = this.sService.getLoggedStudent()
    return sData.id == this.deck?.author?.id
  }

  follow() {
    this.sService.followDeck(this.deck!).subscribe({
      next: ()=> window.location.reload()
    })
  }

  unfollow(){
    this.sService.unfollowDeck(this.deck!).subscribe({
      next: ()=> window.location.reload()
    })
  }

  delete(){
    this.dService.deleteDeck(this.deck!).subscribe({
      next: () => window.location.reload()
    })
  }

  modify(){

  }

  startSession() {

  }
}
