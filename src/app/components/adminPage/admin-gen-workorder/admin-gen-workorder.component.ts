import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-gen-workorder',
  templateUrl: './admin-gen-workorder.component.html',
  styleUrls: ['./admin-gen-workorder.component.css']
})
export class AdminGenWorkorderComponent implements OnInit {

  isSubmitted = false;
  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  trainingMode: any = ['Virtual', 'Physical', 'Hybrid'];
  selectedTaxType:string='';
  workOrder={
    pname:'',
    pid:'',
    tpname:'',
    ttopics:'',
    tdate_start:'',
    tdate_end:'',
    tmode:'',
    GSTno:'',
    tax:'' ,
    panno:'',
    amount:'',
    payterms:'' 
  }; 
  constructor(private fb:FormBuilder) { }
  workOrderForm=this.fb.group({
    p_name:['', [Validators.required]],
    p_id:['', [Validators.required]],
    tp_name:['', [Validators.required]],
    t_topics:['', [Validators.required]],
    start:[''],
    end:[''],
    t_mode:['', [Validators.required]],
    GST:[''],
    taxControl:['', [Validators.required]] ,
    pan_no:['', [Validators.required]],
    amount:['', [Validators.required]],
    pay_terms:['', [Validators.required]] 
  });

  ngOnInit(): void {
  }

  get workOrderFormControl() {
    return this.workOrderForm.controls;
  }
  radioChangeHandler(event:any){
    this.selectedTaxType=event.target.value;
  }
  onSubmit(){
    this.isSubmitted = true;
    console.log(this.workOrderForm);
    
  }

}
