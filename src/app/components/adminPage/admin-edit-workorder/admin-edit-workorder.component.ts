import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-edit-workorder',
  templateUrl: './admin-edit-workorder.component.html',
  styleUrls: ['./admin-edit-workorder.component.css']
})
export class AdminEditWorkorderComponent implements OnInit {

  trainingMode: any = ['Virtual', 'Physical', 'Hybrid'];
  selectedTaxType:string='';
  workorderid=localStorage.getItem('woid-edit');

  workorder={
    woid : '',
    issue_date : '',
    partner_name : '',
    partner_id : '',
    program_name : '',
    traning_topics : '',
    date_start : '',
    date_end : '',
    mode : '',
    GSTno : '',
    tax_type : '',
    panNo : '',
    amount : '',
    payterms : '',
    wo_status : '',
  }

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getWorkorder(this.workorderid)
    .subscribe((data)=>{
      this.workorder = JSON.parse(JSON.stringify(data));
    })
  }
  radioChangeHandler(event:any){
    this.selectedTaxType=event.target.value;
  }

  update(){

  }

}
