import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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

  constructor(
    private sanitizer: DomSanitizer,
    private financeService: FinanceService
  ) {}

  ngOnInit(): void {
    // this.link = 'https://elgoog.im/breakout/';
    this.link = '';
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);

    this.data = '1662038732194';
    this.financeService.getInvo(this.data);
  }
}
