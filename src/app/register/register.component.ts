import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-consomation.service';
import { FormsModule } from '@angular/forms';
import { User } from '../Models/Login';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  UserLists: User={};

  constructor(private router: Router, private appservice: ApiServiceService) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.appservice.registeruser(this.UserLists)
    .subscribe(
      {
        next: (result) => {
          this.router.navigate(['']);
        }
      }
      
    );
  }
}
