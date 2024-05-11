import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  ////////////////////    Authentification    ///////////////////
  registeruser(data: any) {
    
    return this.http.post<any>('http://localhost/projetphp/Auth/signup.php', data);;
  }

  loginuser(data: any) {
    let myData = this.http.post<any>('http://localhost/projetphp/Auth/login.php',data);
    return myData;
  }

  
  getCategory():any {
    let myData = this.http.get<any>('http://localhost/projetphp/Business/CategorieController.php');
    return myData;
  }

AddCategory(data: any) {
    let myData = this.http.post<any>('http://localhost/projetphp/Business/CategorieController.php',data);
    return myData;
  }





}
