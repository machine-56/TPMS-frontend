import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-finance-each-payment',
  templateUrl: './finance-each-payment.component.html',
  styleUrls: ['./finance-each-payment.component.css']
})
export class FinanceEachPaymentComponent implements OnInit {

  invono=localStorage.getItem("invono");
  

    safeUrl: any;
    data:any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.data = 'https://machine-56.github.io/Portfolio-Website/'
    this.safeUrl= this.sanitizer.bypassSecurityTrustResourceUrl(this.data)
  }

}
