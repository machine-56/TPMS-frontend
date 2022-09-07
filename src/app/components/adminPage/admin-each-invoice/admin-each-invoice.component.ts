import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-each-invoice',
  templateUrl: './admin-each-invoice.component.html',
  styleUrls: ['./admin-each-invoice.component.css']
})
export class AdminEachInvoiceComponent implements OnInit {

  safeUrl: any;
  data: any;
  link: any;
  uid:any;
  constructor(private sanitizer: DomSanitizer, private adminService: AdminService, private router:Router) {}

  ngOnInit(): void {
    this.uid = localStorage.getItem('invo-id');
    this.data = localStorage.getItem('invo-file');
    this.link = `http://localhost:4156/api/admin/invoice/${this.data}`;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }

  fnApv(){
    this.adminService.invoApv(this.uid).subscribe(()=>{
      alert('Inovice approved');
      this.router.navigate(['/admin/invoice'])
    })
  }

  fnDeny(){
    this.adminService.invoDeny(this.uid).subscribe(()=>{
      alert('Inovice denied');
      this.router.navigate(['/admin/invoice'])
    })
  }

}
