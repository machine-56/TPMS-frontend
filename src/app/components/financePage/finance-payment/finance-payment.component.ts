import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-finance-payment',
  templateUrl: './finance-payment.component.html',
  styleUrls: ['./finance-payment.component.css'],
})
export class FinancePaymentComponent implements OnInit {
  payments: any = [];

  constructor(private router: Router, private financeService: FinanceService) {}

  ngOnInit(): void {
    localStorage.removeItem('invo-id');
    localStorage.removeItem('invo-file');
    this.financeService.getPayment().subscribe((data: any) => {
      this.payments = data;
    });
  }

  detailedView(data: any, file: any) {
    localStorage.setItem('invo-id', data.toString() );
    localStorage.setItem('invo-file', file.toString() );
    this.router.navigate(['/finance/payment/'+file]);
  }
}
