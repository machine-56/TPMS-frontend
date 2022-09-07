import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  // workorder={
  //   woid : '',
  //   issue_date : '',
  //   partner_name : '',
  //   partner_id : '',
  //   program_name : '',
  //   traning_topics : '',
  //   date_start : '',
  //   date_end : '',
  //   mode : '',
  //   GSTno : '',
  //   tax_type : '',
  //   panNo : '',
  //   amount : '',
  //   payterms : '',
  //   wo_status : '',
  // }
  public workorder:any=[];
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getWorkorder(this.workorderid)
    .subscribe((data)=>{
      this.workorder = JSON.parse(JSON.stringify(data));
    })
  }

  update(){
    let answer = confirm('Are you sure you want to update Workorder');
    if (answer) {
      this.adminService.editWorkorder(this.workorder).subscribe(()=>{})
      this.router.navigate(['/admin/workorder/',this.workorderid]);
    }
  }

}
