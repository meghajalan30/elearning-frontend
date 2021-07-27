import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;


  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.registrationForm=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'email':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required),
      'phone':new FormControl(null,Validators.required),
      'address':new FormControl(null,Validators.required),
      'userId':new FormControl(null,Validators.required),
      'photo':new FormControl(null,Validators.required),
    });

    this.userService.getUsers().subscribe(users => {
      console.log(users);
    });

  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this.userService.addUser(this.registrationForm.value);
    this.registrationForm.reset();
  }

  

}
