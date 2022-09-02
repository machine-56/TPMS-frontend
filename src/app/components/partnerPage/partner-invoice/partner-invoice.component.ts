import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partner-invoice',
  templateUrl: './partner-invoice.component.html',
  styleUrls: ['./partner-invoice.component.css'],
})
export class PartnerInvoiceComponent implements OnInit {
  invoice: any = {};

  displayMultipleInvoices!: Boolean;
  @ViewChild('multipleInput', { static: false }) multipleInput!: ElementRef;

  multipleInvoices = [];
  constructor(private router: Router, private partnerService: PartnerService) {
    this.displayMultipleInvoices = false;
  }

  ngOnInit(): void {}

  selectMultipleInvoice(event: any) {
    if (event.target.files.length > 0) {
      this.multipleInvoices = event.target.files;
    }
  }
  invoiceSubmit() {
    const formdata = new FormData();

    for (let img of this.multipleInvoices) {
      formdata.append('files', img);
    }

    //do the form upload call on successfull completion of fileupload
    this.partnerService.invoiceFileUpload(formdata).subscribe((res) => {
      this.multipleInput.nativeElement.value = '';
      this.invoiceFormUpload(res.path[0]);
      this.displayMultipleInvoices = true;
    });
    this.router.navigate(['/partner/workorder/']);
  }

  invoiceFormUpload(invoiceFileName: any) {
    this.invoice.fileName = invoiceFileName;
    this.invoice.paystatus = 'pending';
    console.log(this.invoice);
    this.partnerService.invoiceFormUpload(this.invoice).subscribe({
      next: (succ: any) => {
        if (succ.success) {
          console.log('success invoice uploaded');
        }
      },
      error: (err) => {
        console.log('Error', err);
      },
    });
  }
}
