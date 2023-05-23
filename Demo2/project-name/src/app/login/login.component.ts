import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailId: any;
  password: any;
  customer: any;

  constructor(private service: CustService, private router: Router) { }

  ngOnInit() { }

  async loginSubmit(loginForm: any) {
    console.log(loginForm);

    if (loginForm.emailId === 'admin123@gmail.com' && loginForm.password === 'Admin123@') {
      alert("Welcome to ADMIN Home Page");
      this.service.setUserLoggedIn();
      this.router.navigate(['admin']);
    } else {
      await this.service.custLogin(loginForm).then((cust: any) => {
        this.customer = cust;
        console.log(cust);

        if (this.customer != null) {
          this.service.setUserLoggedIn();
           this.router.navigate(['breed']);
        } else {
          alert('Invalid Credentials');
        }
      }).catch((error: any) => {
        console.error(error);
        alert('An error occurred while logging in.');
      });
    }
  }
}
