import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiServerURL } from '../global';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {
  constructor(private http: HttpClient) {}

  getProfile(uid: any) {
    return this.http.get(`${apiServerURL}/partner/edit`);
  }

  updateProfile(profile: any) {
    // console.log('Profile Update');
    // return this.http
    //   .put(`${apiServerURL}/partner`, profile)
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }
}
