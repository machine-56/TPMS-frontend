import { HttpClient,HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverURL } from '../server';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}
 
  loginFn(loginData: any) {
    // console.log(`from service file: ${loginData}`);
    // console.log(loginData.uname);
    // console.log(loginData.pwd);
    return this.http.post<any>(`${serverURL}/login`, loginData);
  }
  loggedIn(){
   
    return !!localStorage.getItem('token');
    
  }
  getToken(){
    return localStorage.getItem('token');
  }
 
}
