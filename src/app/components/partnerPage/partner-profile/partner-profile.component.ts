import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  profile = [
    {
      image:
        'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
      name: 'Adarsh S',
      username: 'adarsh4-',
      pwd: 'Adarsh4',
      post: '',
      id: '45454gsgf01',
      pan: 'ABCTY1234D',
      email: 'adarsh@gmail.com',
      phno: '9544786853',
      company: 'TCS',
    },
    // {
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
    // },
  ];
  constructor() {}

  ngOnInit(): void {}

  // to show password in update page
  viewpass() {
    this.visible = !this.visible;
    this.inputType = !this.inputType;
  }

  // to get back to edit page and hide profile view
  toeditpage() {
    this.editpage = !this.editpage;
    this.hidepage = !this.hidepage;
  }

  // to get back to updatepage and hide edit profile page
  updatepage() {
    this.editpage = !this.editpage;
    this.hidepage = !this.hidepage;
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
