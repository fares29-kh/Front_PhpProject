import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  ////////////////////    Authentification    ///////////////////
  registeruser(data: any) {
    let myData = this.http.post<any>('https://localhost:7111/auth/register', data);
    return myData;
  }

  loginuser(data: any) {
    let myData = this.http.post<any>('http://localhost/projetphp/Auth/login.php',data);
    return myData;
  }








}
