import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partner-profile',
  templateUrl: './partner-profile.component.html',
  styleUrls: ['./partner-profile.component.css'],
})
export class PartnerProfileComponent implements OnInit {
  // visible: boolean = true;
  // inputType: boolean = true;
  // editpage: boolean = true;
  // hidepage: boolean = false;
  passw: boolean = true;

  profile = {
    image: '',
    name: '',
    uname: '',
    pwd: '',
    post: '',
    pid: '',
    pan: '',
    email: '',
    phoneNo: '',
    compname: '',
  };
  constructor(private partnerService: PartnerService) {}

  // uid = '630cd9f83c17e58710676441';

  ngOnInit(): void {
    let uid = '6309171b58dd3ac67bdaa4fb';
    this.partnerService.getProfile(uid).subscribe((data: any) => {
      console.log(data);
      // this.profile = data;
      this.profile = JSON.parse(JSON.stringify(data));
    });
  }

  editProfView(data: any) {
    // localStorage.setItem("")
  }

  // to show password in profile view
  pass(event: any): void {
    if (event.target.checked) {
      this.passw = !this.passw;
    } else {
      this.passw = true;
    }
  }
}
