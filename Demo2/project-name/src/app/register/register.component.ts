import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  countries: any;
  customers:any;
  customer: any;

 
  constructor(private service: CustService) {
   
    this.customer = {custId:'', custName:'', country:'',address:'', gender:'',mobNo:'',emailId:'', password:''};
    
  }

    /*this.customers = [
      {custId:101, custName:'Ritika',country:'INDIA', address:'hyderabad',gender:'FeMale',mobNo:9022235881,  emailId:'ritika@gmail.com', password:'123'},
      {custId:102, custName:'Aishu',country:'INDIA', address:'Ballarsha',gender:'FeMale',mobNo:9033335881,  emailId:'aishu@gmail.com', password:'123'},
      {custId:103, custName:'Mugu',country:'INDIA', address:'pune',gender:'FeMale',mobNo:9044435881,  emailId:'mugu@gmail.com', password:'123'},
    ];*/

  
  
  ngOnInit(){
    this.service.getAllCountries().subscribe((countriesData: any) => {
      this.countries = countriesData;
      console.log(countriesData);
    });
  
 
   
  }

  register(regForm: any) {
    console.log(regForm);

    this.customer.custId = regForm.custId;
    this.customer.custName=regForm.custName;
    this.customer.country=regForm.country;
    this.customer.address=regForm.address;
    this.customer.gender=regForm.gender;
    this.customer.mobNo=regForm.mobNo;
    this.customer.emailId = regForm.emailId;
    this.customer.password = regForm.password;

  //this.customers.push(regForm);
    console.log(this.customer);

    this.service.registerCustomer(this.customer).subscribe((result: any) => {
      console.log(result);
    });
   

  }

 

}
