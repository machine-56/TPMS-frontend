import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-apv-invoice',
  templateUrl: './admin-apv-invoice.component.html',
  styleUrls: ['./admin-apv-invoice.component.css']
})
export class AdminApvInvoiceComponent implements OnInit {

  invoices=[
   {
    invoiceId:"",
    patnerName:"",
    invoiceDate:"",
    stat:"",

   }
]

  constructor(private router:Router) { }

  ngOnInit(): void {
    localStorage.removeItem("invoID");
  }

  detailedView(data: any){
    localStorage.setItem("invoID",data);
    this.router.navigate(['/admin/invoice/',data]);
  }

}
