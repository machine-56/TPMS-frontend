import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    uname: '',
    pwd: '',
  };
  test = '';
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onLogin() {
    this.loginService.loginFn(this.loginData).subscribe((data) => {
      this.test = JSON.parse(JSON.stringify(data));
      // console.log(this.post);
      console.log(this.test);
      if (this.test === 'admin') {
      }
      this.router.navigate([`/admin/dashboard`]);
    });
  }
}
