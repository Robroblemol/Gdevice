import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public email: string;
public password: string;
  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.authService.registerUser(this.email,this.password)
    .then((res)=>{
      //console.log('Ok!!!');
      //console.log(res);
      this.router.navigate(['/devices']);
    }).catch((err) =>{
      console.log(err);
    });
  }

}
