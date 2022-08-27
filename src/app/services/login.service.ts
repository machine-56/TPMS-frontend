import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverURL } from '../global';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginFn(loginData: any) {
    // console.log(`from service file: ${loginData}`);
    // console.log(loginData.uname);
    // console.log(loginData.pwd);
    return this.http.post(`${serverURL}/login`, loginData);
  }
}
