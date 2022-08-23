import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-invoice',
  templateUrl: './partner-invoice.component.html',
  styleUrls: ['./partner-invoice.component.css']
})
export class PartnerInvoiceComponent implements OnInit {

  form:FormGroup | any;

  constructor(private formbuilder: FormBuilder, private router:Router) { }


  ngOnInit(): void {
    this.form = this.formbuilder.group({
      woid: this.formbuilder.control('', Validators.required),
      invono: this.formbuilder.control('', Validators.required),
      invodate: this.formbuilder.control('', Validators.required),
      duedate: this.formbuilder.control('', Validators.required),
      file: this.formbuilder.control('', Validators.required)
    })
  }

  invoice(data: any){
    console.log(data);
    this.router.navigate(['/partner/workorder'])
  }

}
