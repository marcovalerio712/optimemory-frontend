import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/Student/student';
import { StudentService } from 'src/app/service/StudentService/student.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {
  
  public student = new Student()
  public errorFlag: Boolean = false;
  public successFlag: boolean = false;
  public successMessage: string = ''
  public errorMessage : String = ''

  @ViewChild('passwd') passwordInput: any;
  @ViewChild('cpasswd') confirmPasswordInput: any;

  constructor(private service: StudentService, private router: Router) {
    
  }

  onSubmit() {
    this.successFlag = false;
    this.errorFlag = false;
    if(this.passwordMatch()){
      this.service.registerStudent(this.student).subscribe({
        next: data => {
          this.successMessage = 'User registered successfully, please confirm your email.'
          this.successFlag = true
        },
        error: () => {
          this.errorMessage = 'Username or Email already in use, please login.'
          this.errorFlag = true;
        }

      })
      this.student = new Student();
      this.confirmPasswordInput.nativeElement.value = '';
    }
    else{
      this.errorMessage = 'Please make "password" and "confirm password" fields to match'
      this.errorFlag = true;
    }
      
  }

  passwordMatch() : boolean {
    return this.passwordInput.nativeElement.value 
        == this.confirmPasswordInput.nativeElement.value;
  }

}
