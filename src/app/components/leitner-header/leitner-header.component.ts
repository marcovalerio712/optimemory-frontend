import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/Student/student';

@Component({
  selector: 'leitner-header',
  templateUrl: './leitner-header.component.html',
  styleUrls: ['./leitner-header.component.css']
})
export class LeitnerHeaderComponent implements OnInit{

  
  student?: Student
  title = "OptiMemory"

  ngOnInit(): void {
    
    if(sessionStorage.getItem('loggedStudent')){
      this.student = JSON.parse(sessionStorage.getItem('loggedStudent')!)
    }
  }

  logout() {
    sessionStorage.removeItem('loggedStudent');
    window.location.reload();
  }

}
