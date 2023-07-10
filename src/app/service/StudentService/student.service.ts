import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Deck } from 'src/app/model/Deck/deck';
import { Student } from 'src/app/model/Student/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  private baseUrl: String = "http://localhost:8080/api/student"

  constructor(private http: HttpClient) 
  {
    
  }

  public getLoggedStudent() : Student | any {
    var ls = sessionStorage.getItem('loggedStudent');
    if(!ls)
      return null;
    return JSON.parse(ls);
  }

  registerStudent(studentData: Student) : Observable<Object> {
    return this.http.post(`${this.baseUrl}/register`, studentData);
  } 

  loginStudent(studentData: Student) : Observable<Student> {
    return this.http.post(`${this.baseUrl}/login`, studentData);
  }

  getStudentByID(studentId: number) : Observable<Student> {
    return this.http.get(`${this.baseUrl}/${studentId}`);
  }

  followDeck(deck: Deck){
    var studentData = JSON.parse(sessionStorage.getItem('loggedStudent')!)
    return this.http.post(`${this.baseUrl}/follow/${deck.id}`, studentData);
  }

  unfollowDeck(deck: Deck) {
    var studentData = JSON.parse(sessionStorage.getItem('loggedStudent')!)
    return this.http.post(`${this.baseUrl}/unfollow/${deck.id}`, studentData);
  }

}
