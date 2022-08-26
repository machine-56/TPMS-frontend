import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiServerURL } from '../global';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}
  signup(signupData: any) {
    return this.http
      .post(`${apiServerURL}/signup`, signupData)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
