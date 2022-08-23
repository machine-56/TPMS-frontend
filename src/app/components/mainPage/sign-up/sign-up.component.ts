import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  positions = ['Partner', 'Finance', 'Admin'];
  signupData = {
    fname: '',
    lname: '',
    uname: '',
    pwd: '',
    email: '',
    position: '',
    phoneNo: '',
  };
  constructor() {}

  ngOnInit(): void {}
  onSignup() {
    console.log(this.signupData);
  }
}
