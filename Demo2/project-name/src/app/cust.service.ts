import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustService {
 
  loginStatus: boolean;

  constructor(private http: HttpClient) { 
    this.loginStatus = false;
  }

  getAllCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getAllCustomers(): any {
    return this.http.get('http://localhost:8085/getAllCustomers');
  }

  registerCustomer(cust: any): any {
    return this.http.post('registerCustomer', cust);
  }

  setUserLoggedIn() {
    this.loginStatus = true;
  }

  setUserLoggedOut() {
    this.loginStatus = false;
  }

  getLoginStatus(): boolean {
    return this.loginStatus;
  }

  custLogin(loginForm: any): any {
    return this.http.get('login/' + loginForm.emailId + "/" + loginForm.password).toPromise();
  }
}
 

 

