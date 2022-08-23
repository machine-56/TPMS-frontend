import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-each-workorder',
  templateUrl: './finance-each-workorder.component.html',
  styleUrls: ['./finance-each-workorder.component.css']
})
export class FinanceEachWorkorderComponent implements OnInit {

  woid=localStorage.getItem("woid");
  pdfsrc='https://file-examples.com/storage/fe5467a6a163010b197fb20/2017/10/file-sample_150kB.pdf';

  constructor() { }

  ngOnInit(): void {
  }

}
