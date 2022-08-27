import { Component, OnInit } from '@angular/core';
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

  constructor(private financeService: FinanceService) {}

  ngOnInit(): void {
    this.financeService.eachWorkOrder(this.woid)
    .subscribe((data)=>{
      this.eachWO = JSON.parse(JSON.stringify(data));
    });
  }

}
