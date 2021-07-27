import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient){}
    
    getUsers(){
        return this.http.get('http://localhost:8080/api/users',{observe:'response'});
    }

    addUser(user:User){
        this.http.post('http://localhost:8080/api/users',user).subscribe(responseData => {
            console.log(responseData);
        });
    }
}
