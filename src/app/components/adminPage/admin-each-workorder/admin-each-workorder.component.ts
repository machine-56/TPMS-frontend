import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-admin-each-workorder',
  templateUrl: './admin-each-workorder.component.html',
  styleUrls: ['./admin-each-workorder.component.css']
})
export class AdminEachWorkorderComponent implements OnInit {
  public id: any;logo='/assets/images/logo.svg';
  public workorders:any=[];
  constructor(private route:ActivatedRoute,private adminService:AdminService,@Inject(LOCALE_ID) private locale: string) { }

  ngOnInit(): void {
    this.id = this. route. snapshot. paramMap. get('id');
   
    this.adminService.getWorkorderById(this.id).subscribe((workorder:any) => {
      this.workorders=JSON.parse(JSON.stringify(workorder));
     
		})
  }
  generatePDF(){
    var docDefinition = {
    footer: {
              stack:[
              {
                text:' GF-1 Thejaswini Building, Technopark Rd, Thiruvananthapuram, Kerala 695581\n\n\n',
                fontSize:10,
              }],
              margin:25
            },
    content: [
       
        {
          style: 'tableExample',
          color: '#444',
          layout: 'headerLineOnly',
          table: {
            widths: [200, '*'],
            headerRows: 1,
            heights: 30,
            body: [
              [{text: 'WORKORDER', style: 'header', colSpan: 2, alignment: 'center',fillColor: '#fafafa',border:0}, {}],
              
            ]
          }
        },
        {
          columns: [
            {
              text: 'Workorder # : '+ this.workorders.woid+'\n Issued Date : ' + formatDate(this.workorders.issue_date,'dd-MM-yyyy',this.locale),
              margin:25,
              color:'grey'
            },
            {
              text:''
            }
          ]
        },
        
        {
          columns: [
            {
              margin:25,
              width: '50%',
              text: 'Partner Name : '+this.workorders.partner_name+'\n Partner Id : ' + this.workorders.partner_id+'\n Pan Number : ' + this.workorders.panNo +'\n GST No : ' + this.workorders.GSTno,
            },
            {
              width: '50%',
              text: '\nTraining Date : ' + formatDate(this.workorders.date_start,'dd-MM-yyyy',this.locale),
              margin:25,
              color:'grey'
            }
          ] 
        },
        {text:'\n\n'},
      {
        style: 'tableExample',
        color: '#444',
       
        table: {
          widths: [250, '*'],
          headerRows: 1,
          heights: 20,
          // keepWithHeaderRows: 1,
          body: [
            [{text: 'More Details', style: 'tableHeader', colSpan: 2, alignment: 'center',fillColor: '#7abaff'}, {}],
            [{text: 'Training Program Name :', style: 'tableHeader', alignment: 'left'}, this.workorders.program_name],
            [{text: 'Training Topics :', style: 'tableHeader', alignment: 'left'}, this.workorders.traning_topics],
            [{text: 'Training Mode :', style: 'tableHeader', alignment: 'left'}, this.workorders.mode],
            [{text: 'Amount per hour :', style: 'tableHeader', alignment: 'left'}, this.workorders.amount],
            [{text: 'Payment Terms :', style: 'tableHeader', alignment: 'left'}, this.workorders.payterms],
          ]
        }
      },
    ],
    styles: {
      header: {
        fontSize: 22,
        bold: true,
        
      },
      tableExample: {
        margin: 5
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    },
    defaultStyle: {
      columnGap: 20
    }
    
  }
      pdfMake.createPdf(docDefinition).open();  
    }
}
