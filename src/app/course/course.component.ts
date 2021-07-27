import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../service/course.model';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseForm: FormGroup;
  courseList:Course[]=[];
  course:Course=null;

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {

    this.courseForm=new FormGroup({
      'courseName':new FormControl(null,Validators.required),
      'courseDesc':new FormControl(null,Validators.required),
      'courseFee':new FormControl(null,Validators.required),
      'courseId':new FormControl(null,Validators.required),
      'courseResource':new FormControl(null,Validators.required),
    });

    this.courseService.getCourses().subscribe(courses => {
      console.log(courses.body);
      this.courseList=[];
      Object.entries(courses.body).forEach(
        ([key, value]) => this.courseList.push(value)
      )
    },err => {
      console.log(err.message);
    });

  }

  onSubmit(){
    console.log(this.courseForm.value);
    this.courseService.addCourse(this.courseForm.value);
    this.courseForm.reset();
  }


}
