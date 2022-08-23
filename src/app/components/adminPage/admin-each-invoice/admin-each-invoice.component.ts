import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-each-invoice',
  templateUrl: './admin-each-invoice.component.html',
  styleUrls: ['./admin-each-invoice.component.css']
})
export class AdminEachInvoiceComponent implements OnInit {

  pdfsrc='https://file-examples.com/storage/fe5467a6a163010b197fb20/2017/10/file-sample_150kB.pdf';

  constructor() { }

  ngOnInit(): void {
    localStorage.getItem("invoID");
  }

}
