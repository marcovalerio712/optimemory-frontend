import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/Student/student';
import { StudentService } from 'src/app/service/StudentService/student.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {

  public student : Student = new Student();
  public errorMessage : string = 'Incorrect username or password, please try again'
  public errorFlag : boolean = false

  constructor(private service : StudentService, private router: Router){

  }

  onSubmit() {

    this.student.email = this.student.username
    
    this.service.loginStudent(this.student).subscribe(
    {
      next: st => {
        sessionStorage.setItem('loggedStudent', JSON.stringify(st))
        this.student = new Student();
        this.router.navigate(['/home']).then(
          () => window.location.reload()
        );
      },
      error: () => {
        this.errorFlag = true;
      }
    }
    );

  }

}
