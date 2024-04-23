import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-consomation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Change styleUrl to styleUrls
})
export class RegisterComponent implements OnInit {
  UserLists: any = {
    username: '',
    phone: '',
    email: '',
    pwd: '',
  };

  constructor(private router: Router, private appservice: ApiServiceService) { }
  ngOnInit(): void {
  }
  registerUser() {
    this.appservice.registeruser(this.UserLists).subscribe(
      (data: any) => {
        console.log(data.status);
        if (data.status === 'success') {
          this.router.navigate(['']); // Navigate to home if registration is successful
        } else {
          // Handle registration failure
          console.error('Registration failed:', data.error);
          // You can display an error message to the user here
        }
      },
      (error) => {
        // Handle error
        console.error('An error occurred:', error);
        // You can display an error message to the user here
      }
    );
  }
}
