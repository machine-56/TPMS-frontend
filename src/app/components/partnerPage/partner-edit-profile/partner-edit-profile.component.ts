import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partner-edit-profile',
  templateUrl: './partner-edit-profile.component.html',
  styleUrls: ['./partner-edit-profile.component.css'],
})
export class PartnerEditProfileComponent implements OnInit {
  visible: boolean = true;
  inputType: boolean = true;
  profile = {
    image:
      'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
    name: 'Adarsh S',
    username: 'adarsh4',
    pwd: 'Adarsh4',
    post: 'partner',
    id: '45454gsgf01',
    pan: 'ABCTY1234D',
    email: 'adarsh@gmail.com',
    phno: '9544786853',
    company: 'TCS',
  };
  // profile = {
  //   image: '',
  //   name: '',
  //   username: '',
  //   pwd: '',
  //   post: '',
  //   id: '',
  //   pan: '',
  //   email: '',
  //   phno: '',
  //   company: '',
  // };
  constructor(private router: Router, private partnerService: PartnerService) {}

  ngOnInit(): void {}

  // to show password in update page
  viewpass() {
    this.visible = !this.visible;
    this.inputType = !this.inputType;
  }
  update() {
    this.partnerService.updateProfile(this.profile);
    localStorage.removeItem('update');
    alert('success');
    this.router.navigate(['partner/profile']);
  }
}

// ----------------------------------------------
// {image: '',
//     name: '',
//     username: '',
//     pwd: '',
//     post: '',
//     id: '',
//     pan: '',
//     email: '',
//     phno: '',
//     company: '',}
