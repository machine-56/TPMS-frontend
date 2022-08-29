import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-finance-payment',
  templateUrl: './finance-payment.component.html',
  styleUrls: ['./finance-payment.component.css']
})
export class FinancePaymentComponent implements OnInit {

  payments=[{
    woid:'test/wo/user/uid/001',
    invono:'invo/ptnr1/id20331',
    stat:'pending'
  },
  {
    woid:'test/wo/user/uid/002',
    invono:'invo/ptnr2/id45180',
    stat:'overdue'
  },
  {
    woid:'test/wo/user/uid/003',
    invono:'invo/ptnr3/id81824',
    stat:'paid'
  },
]

  constructor(private router:Router, private financeService: FinanceService) { }

  ngOnInit(): void {
    localStorage.removeItem("invono");
  }

  detailedView(invono: any){
    localStorage.setItem("invono",invono.toString());
    this.router.navigate(['/finance/payment/',invono])
  }

  fnpay(data: any){
    this.financeService.payfn(data)
    .subscribe(()=>{})
  }

}
