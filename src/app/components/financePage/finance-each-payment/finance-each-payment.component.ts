import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-each-payment',
  templateUrl: './finance-each-payment.component.html',
  styleUrls: ['./finance-each-payment.component.css']
})
export class FinanceEachPaymentComponent implements OnInit {

  invono=localStorage.getItem("invono");

  constructor() { }

  ngOnInit(): void {
  }

}
