import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/Student/student';
import { StudentService } from 'src/app/service/StudentService/student.service';

@Component({
  selector: 'app-student-created-decks',
  templateUrl: './student-decks.component.html',
  styleUrls: ['./student-decks.component.css']
})
export class StudentDecksComponent implements OnInit{

  student?: Student | undefined;

  constructor(private service: StudentService) {
    
  }

  ngOnInit(): void {
    this.student = JSON.parse(sessionStorage.getItem('loggedStudent')!)
    this.service.getStudentByID(this.student!.id!).subscribe({
        next: data => {this.student = data},
        error: (err) => console.log(err)
      }
    )
  }
}
