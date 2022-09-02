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
    partner_id: '',
    pan: '',
    email: '',
    phoneNo: '',
    company: '',
  };
  constructor(private partnerService: PartnerService, private router: Router) {}

  // uid = '630cd9f83c17e58710676441';

  ngOnInit(): void {
    let uid = localStorage.getItem("user");
    this.partnerService.getProfile(uid).subscribe((data: any) => {
      this.profile = JSON.parse(JSON.stringify(data));
    });
  }

  editProfView() {
    this.router.navigate(['/partner/profile/edit']);
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
