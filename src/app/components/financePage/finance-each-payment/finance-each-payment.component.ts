import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-finance-each-payment',
  templateUrl: './finance-each-payment.component.html',
  styleUrls: ['./finance-each-payment.component.css'],
})
export class FinanceEachPaymentComponent implements OnInit {
  invono = localStorage.getItem('invono');

  safeUrl: any;
  data: any;
  link: any;
  uid:any;
  constructor(private sanitizer: DomSanitizer, private financeService: FinanceService) {}

  ngOnInit(): void {
    this.uid = localStorage.getItem('invo-id');
    this.data = localStorage.getItem('invo-file');
    this.link = `http://localhost:4156/api/finance/invoice/${this.data}`;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }

  fnPay() {
    this.financeService.payFn(this.uid)
    .subscribe(()=>{});
  }
}
