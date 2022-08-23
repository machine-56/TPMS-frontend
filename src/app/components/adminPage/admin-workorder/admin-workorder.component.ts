import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-workorder',
  templateUrl: './admin-workorder.component.html',
  styleUrls: ['./admin-workorder.component.css']
})
export class AdminWorkorderComponent implements OnInit {

  workOrder=[
    { woid:'test/wo/user/uid/001',
    pname:'SalesForce',
    tpname:'Bootcamp',
    tdate:'24 September,2022'
    },
    { woid:'test/wo/user/uid/002',
    pname:'Microsoft',
    tpname:'Project Mentoring',
    tdate:'22 September,2022'
    },
    { woid:'test/wo/user/uid/003',
    pname:'AWS',
    tpname:'Bootcamp',
    tdate:'2 September,2022'
    },
    { woid:'test/wo/user/uid/004',
    pname:'Oracle Academy',
    tpname:'Program Orientation',
    tdate:'3 October,2022'
    },
    { woid:'test/wo/user/uid/004',
    pname:'AWS',
    tpname:'Program Orientation',
    tdate:'11 October,2022'
    },
    { woid:'test/wo/user/uid/004',
    pname:'Oracle Academy',
    tpname:'Bootcamp',
    tdate:'6 October,2022'
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
