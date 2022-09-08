import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-dashboard',
  templateUrl: './finance-dashboard.component.html',
  styleUrls: ['./finance-dashboard.component.css']
})
export class FinanceDashboardComponent implements OnInit {

  role:any;

  constructor() { }

  ngOnInit(): void {
    this.role=localStorage.getItem('role');
  }

}
