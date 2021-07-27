import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient){}
    
    getCourses(){
        return this.http.get('http://localhost:8080/api/courses',{observe:'response'});
    }

    addCourse(course:Course){
      console.log(course);
        this.http.post('http://localhost:8080/api/courses',course).subscribe(responseData => {
            console.log(responseData);
        });
    }
}
