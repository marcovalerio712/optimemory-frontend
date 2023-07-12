import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/Student/student';
import { StudentService } from 'src/app/service/StudentService/student.service';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnChanges{



  students?: Student[]

  currentStudent = new Student()
  onStudentUpdate: boolean = false;

  //@ViewChild('studentUpdate', { read: ViewContainerRef }) entry?: ViewContainerRef;

  constructor(private service: StudentService, private router: Router) {
  
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  delete(student: Student){
    console.log(student)
    this.service.deleteStudent(student).subscribe(
      {
        next: ()=>{
          this.router.navigateByUrl('/',{skipLocationChange:true}).then(
          ()=>{
            this.router.navigate([`/students`])
          })
        },
        error: (err)=>console.log(err)
      }
    );
  }

  update(student: Student) {
    this.openPopup()
    this.currentStudent.id = student.id;
    this.currentStudent.username = student.username
    this.currentStudent.email = student.email
    this.currentStudent.password = student.password
  }

  saveUpdatedUser(student: Student) {
    this.closePopup();
    this.service.updateStudent(student).subscribe({
      next: (data)=>{
        this.students?.forEach((element,index)=>{
          if(element.id == data.id){
            element.username = data.username
            element.email = data.email
            element.password = data.password
          }
        });
      }
    })

  }

  closePopup(){
    this.onStudentUpdate = false;
  }

  openPopup(){
    this.onStudentUpdate = true;
  }

  ngOnInit(): void {
    
    this.service.getAllStudents().subscribe({
      next: (data)=>{
        this.students = data
      },
      error: ()=>{

      }
    })

  }



}
