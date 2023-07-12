import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/model/Student/student';

@Component({
  selector: 'update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{

  
  @Input() student?: Student
  @Output() onUpdate = new EventEmitter<Student>();
  @Output() onClose = new EventEmitter<Object>();

  constructor() {

  }
  
  ngOnInit(): void {
    
  }

  close() {
    this.onClose.emit();
  }

  onSubmit() {
    this.onUpdate.emit(this.student)
  }


}
