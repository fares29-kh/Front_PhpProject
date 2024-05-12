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
    if (!this.validateForm()) {
      console.error('Form data is not valid');
      return;
    }
  
    const formData = {
      nomC: this.categorie.nomC,
      descriptionC: this.categorie.descriptionC,
      date_creation: this.categorie.date_creation,
      date_modification: this.categorie.date_modification
    };
  
    this.appservice.AddCategory(formData)
      .subscribe(
        (response: any) => {
          console.log('Category added successfully', response);

          this.clearForm();
        },
        (error) => {
          console.error('An error occurred while adding category:', error);
        }
      );
  }
  
  
  validateForm(): boolean {
    // Perform validation on form inputs
    // For example, check if required fields are filled
    if (!this.categorie.nomC || !this.categorie.descriptionC || !this.categorie.date_creation) {
      console.error('Missing required fields');
      return false;
    }
    return true;
  }
  
  clearForm() {

    this.categorie = {
      nomC: '',
      descriptionC: '',
      date_creation: '',
      date_modification: ''
    };
  }
  
  
}
