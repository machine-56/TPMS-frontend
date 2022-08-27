import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverURL } from '../server';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private logurl = `${serverURL}/finance`;

  constructor(private http:HttpClient) {}

  getWorkOrder(){
    return this.http.get(`${this.logurl}/workorder`);
  }

  eachWorkOrder(data: any){
    return this.http.post(`${this.logurl}/workorder/each`,{"woid":data});
  }

  fnDeny(data: any){
    console.log(data)
    return this.http.delete(`${this.logurl}`+`/workorders/remove/`,data);
  }
}
