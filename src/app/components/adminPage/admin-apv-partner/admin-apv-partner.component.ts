import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-apv-partner',
  templateUrl: './admin-apv-partner.component.html',
  styleUrls: ['./admin-apv-partner.component.css']
})
export class AdminApvPartnerComponent implements OnInit {
  regUserList=[{
    _id:'',
    uname:'',
    email:'',
    post:''
  }];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getUsers().subscribe((data: any)=>{
      this.regUserList = JSON.parse(JSON.stringify(data));
     console.log(this.regUserList);
    });
  }
  PartnerApv(id:any){
    this.adminService.apvfn(id)
    .subscribe(()=>{this.regUserList=this.regUserList.filter(p=>p !== id);})
  }
  PartnerDeny(id:any){
    this.adminService.deletefn(id)
    .subscribe(()=>{
      this.regUserList=this.regUserList.filter(p=>p !== id);
    })
  }
  detailedView(id:any){

  }
}
