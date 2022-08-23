import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-each-workorder',
  templateUrl: './partner-each-workorder.component.html',
  styleUrls: ['./partner-each-workorder.component.css']
})
export class PartnerEachWorkorderComponent implements OnInit {

  woid=localStorage.getItem("woid");

  constructor() { }

  ngOnInit(): void {
  }

}
