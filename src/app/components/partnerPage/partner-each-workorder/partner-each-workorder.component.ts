import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/services/partner.service';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-partner-each-workorder',
  templateUrl: './partner-each-workorder.component.html',
  styleUrls: ['./partner-each-workorder.component.css']
})
export class PartnerEachWorkorderComponent implements OnInit {

  woid=localStorage.getItem("woid");
  public id: any; logo='/assets/images/logo.png';
  public workorders:any=[];
  constructor(private partnerService:PartnerService, private pdfService: PdfService) { }
  
  ngOnInit(): void {
    this.partnerService.eachWorkorder(this.woid)
    .subscribe((data)=>{
      this.workorders = JSON.parse(JSON.stringify(data));
    });
  }

  generatePDF(){
    this.pdfService.generatePDF(this.workorders);
    
  }
}
