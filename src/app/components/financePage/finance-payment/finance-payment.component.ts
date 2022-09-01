import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-finance-payment',
  templateUrl: './finance-payment.component.html',
  styleUrls: ['./finance-payment.component.css']
})
export class FinancePaymentComponent implements OnInit {

  payments:any=[];

  constructor(private router:Router, private financeService: FinanceService) { }

  ngOnInit(): void {
    localStorage.removeItem("invono");
    this.financeService.getPayment()
    .subscribe((data: any)=>{
      this.payments=data;
    })
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
