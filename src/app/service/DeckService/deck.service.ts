import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deck } from 'src/app/model/Deck/deck';
import { Student } from 'src/app/model/Student/student';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  
  private baseUrl: String = "http://localhost:8080/api/deck"

  constructor(private http: HttpClient) 
  {
    
  }

  public getAllDecks() : Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this.baseUrl}`);
  }

  public getCatalogueDecks() : Observable<Deck[]>{
    var student : Student = JSON.parse(sessionStorage.getItem('loggedStudent')!);
    return this.http.post<Deck[]>(`${this.baseUrl}/catalogue`, student);
  }

  public saveDeck(deck : Deck) {
    deck.author = JSON.parse(sessionStorage.getItem('loggedStudent')!)
    return this.http.post<Deck>(`${this.baseUrl}/new`, deck);
  }

  deleteDeck(deck: Deck) : Observable<Object>{
    return this.http.delete<Deck>(`${this.baseUrl}/${deck.id}`);
  }
}
