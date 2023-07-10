import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'src/app/model/Subject/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private baseUrl: String = "http://localhost:8080/api/subject"

  constructor(private http: HttpClient) {

  }

  getSubjects() : Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.baseUrl}`)
  }

}
