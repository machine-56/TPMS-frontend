import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-workorder',
  templateUrl: './partner-workorder.component.html',
  styleUrls: ['./partner-workorder.component.css']
})
export class PartnerWorkorderComponent implements OnInit {

  wos=[{
    woid:'test/wo/user/uid/001',
    name: 'Event name',
    date:'14/10/2022',
    stat: 'new'
  },
  {
    woid:'test/wo/user/uid/002',
    name: 'Event name',
    date:'22/09/2022',
    stat: 'fin'
  },
  {
    woid:'test/wo/user/uid/003',
    name: 'Event name',
    date:'15/11/2022',
    stat: 'new'
  }
]

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem("woid");
  }

  detailedView(woid: any){
    localStorage.setItem("woid",woid.toString());
    this.router.navigate(['partner/workorder/',woid]);
  }

}
