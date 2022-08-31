import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverURL } from '../server';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {
  constructor(private http: HttpClient) {}

  getProfile(uid: any) {
    return this.http.get(`${serverURL}/partner/` + uid);
  }

  updateProfile(profile: any) {
    console.log('profile update');
    return this.http
      .put(`${serverURL}/partner/edit`, profile)
      .subscribe((data) => {
        console.log(data);
      });
  }
  // sendInvoice(item: any) {
  //   return this.http
  //     .post(`${serverURL}/partner/invoice`, item)
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }
  invoiceFormUpload(data: any) {
    return this.http.post(`${serverURL}/partner/invoice`, data);
  }

  invoiceFileUpload(data: any) {
    return this.http.post<any>(`${serverURL}/partner/multifiles`, data);
  }
}
