import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance-apv-workorder',
  templateUrl: './finance-apv-workorder.component.html',
  styleUrls: ['./finance-apv-workorder.component.css'],
})
export class FinanceApvWorkorderComponent implements OnInit {
  wos = [
    {
      woid: 'test/wo/user/uid/001',
      amt: '27k',
      ptnr: 'author',
    },
    {
      woid: 'test/wo/user/uid/002',
      amt: '10k',
      ptnr: 'author',
    },
    {
      woid: 'test/wo/user/uid/003',
      amt: '13k',
      ptnr: 'author',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.removeItem('woid');
  }

  detailedView(woid: any) {
    localStorage.setItem('woid', woid.toString());
    this.router.navigate(['/finance/workorder/', woid]);
  }
}
