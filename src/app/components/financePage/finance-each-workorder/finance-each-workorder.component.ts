import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-finance-each-workorder',
  templateUrl: './finance-each-workorder.component.html',
  styleUrls: ['./finance-each-workorder.component.css']
})
export class FinanceEachWorkorderComponent implements OnInit {

  public id: any;logo='/assets/images/logo.svg';
  eachWO:any=[];
  woid=localStorage.getItem("woid");

  constructor(private financeService: FinanceService, private router: Router) {}

  ngOnInit(): void {
    this.financeService.eachWorkOrder(this.woid)
    .subscribe((data)=>{
      this.eachWO = JSON.parse(JSON.stringify(data));
    });
  }

  fnApv(data: any, pname: any){
    this.financeService.apvFn(data, pname)
    .subscribe(()=>{})
    this.router.navigate(['/finance/workorder'])
  }

  fnDeny(data: any){
    this.financeService.deleteFn(data)
    .subscribe(()=>{
      // alert('Workorder denied');
    })
    this.router.navigate(['/finance/workorder'])
  }

}
