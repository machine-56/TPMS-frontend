import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-admin-each-workorder',
  templateUrl: './admin-each-workorder.component.html',
  styleUrls: ['./admin-each-workorder.component.css']
})
export class AdminEachWorkorderComponent implements OnInit {
  public id: any;logo='/assets/images/logo.svg';
  public workorders:any=[];
  constructor(private route:ActivatedRoute,private adminService:AdminService) { }

  ngOnInit(): void {
    this.id = this. route. snapshot. paramMap. get('id');
   
    this.adminService.getWorkorderById(this.id).subscribe((workorder:any) => {
      this.workorders=JSON.parse(JSON.stringify(workorder));
     
		})
  }

}
