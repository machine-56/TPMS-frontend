import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-each-invoce',
  templateUrl: './finance-each-invoce.component.html',
  styleUrls: ['./finance-each-invoce.component.css']
})
export class FinanceEachInvoceComponent implements OnInit {

  pdfsrc='https://file-examples.com/storage/fe5467a6a163010b197fb20/2017/10/file-sample_150kB.pdf';

  constructor() { }

  ngOnInit(): void {
  }

}
