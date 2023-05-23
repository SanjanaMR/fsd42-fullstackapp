import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  customers: any;

  constructor(private service: CustService) {

    this.customers = [
      {custId:101, custName:'Ritika',country:'INDIA', address:'hyderabad',gender:'FeMale',mobNo:9022235881,  emailId:'ritika@gmail.com', password:'123'},
      {custId:102, custName:'Aishu',country:'INDIA', address:'Ballarsha',gender:'FeMale',mobNo:9033335881,  emailId:'aishu@gmail.com', password:'123'},
      {custId:103, custName:'Mugu',country:'INDIA', address:'pune',gender:'FeMale',mobNo:9044435881,  emailId:'mugu@gmail.com', password:'123'},
    ]

  }

  ngOnInit() {
    this.service.getAllCustomers().subscribe((data: any) => {
      this.customers = data;
      console.log(data);
    });
    
  }

}
