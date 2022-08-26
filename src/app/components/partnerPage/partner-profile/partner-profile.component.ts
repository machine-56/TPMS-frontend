import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partner-profile',
  templateUrl: './partner-profile.component.html',
  styleUrls: ['./partner-profile.component.css'],
})
export class PartnerProfileComponent implements OnInit {
  visible: boolean = true;
  inputType: boolean = true;
  editpage: boolean = true;
  hidepage: boolean = false;
  passw: boolean = true;

  profile = {
    image: '',
    name: '',
    username: '',
    pwd: '',
    post: '',
    id: '',
    pan: '',
    email: '',
    phno: '',
    company: '',
  };
  constructor(private partnerService: PartnerService) {}

  uid = '6309171b58dd3ac67bdaa4fb';

  ngOnInit(): void {
    this.partnerService.getProfile(this.uid);
  }

  // to get back to edit page and hide profile view
  // toeditpage() {
  //   this.editpage = !this.editpage;
  //   this.hidepage = !this.hidepage;
  // }

  // to get back to updatepage and hide edit profile page
  // updatepage() {
  //   this.editpage = !this.editpage;
  //   this.hidepage = !this.hidepage;
  // }
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
