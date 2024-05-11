import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-consomation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {
  categories: any[] = []; 
  categorie: any = {
    nomC: '',
    descriptionC: '',
    date_creation: '',
    date_modification: ''
  };
  constructor(private router: Router, private appservice: ApiServiceService) { }

  ngOnInit(): void {
    this.getAllCategories(); 
  }

  getAllCategories() {
    this.appservice.getCategory().subscribe(
      (data: any) => {
        this.categories = data; 
      },
     (error: any) => {
       console.error('An error occurred:', error);
    }
    );
  }


  saveProduct() {
    this.appservice.AddCategory(this.categorie)
      .subscribe(
        () => {
          console.log('Category added successfully');
          
        },
        (error) => {
          console.error('An error occurred while adding category:', error);
        }
      );
  }
  
}
