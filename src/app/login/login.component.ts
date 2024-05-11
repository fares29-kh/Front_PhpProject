import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-consomation.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginLists: any = {
    username: '',
    password: '',
  };
  showError: boolean = false;

  constructor(private router: Router, private appservice: ApiServiceService) { }

  ngOnInit(): void {
    console.log(this.LoginLists)
  }
  login() {
    this.appservice.loginuser(this.LoginLists).subscribe(
      (data: any) => {
        if (data.status) {
          console.log(data.status);
      this.router.navigate(['Home']);
        } else {
          console.error('Login failed:', data);
          console.log(this.LoginLists.username);
        }
      },
      (error) => {
        console.error('An error occurred:', error);

      }
    );
  }
  
  
  event() {
    this.router.navigate(['register']);
  }
}
