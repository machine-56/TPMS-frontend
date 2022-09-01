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
  
  apvfn(data: any){
    return this.http.put(`${this.logurl}/workorder/apv`,{"id":data})
  }

  deletefn(data: any){
    return this.http.delete(`${this.logurl}/workorder/remove/`+data)
  }

  getPayment(){
    return this.http.get(`${this.logurl}/payment`)
  }

  payfn(data: any){
    return this.http.put(`${this.logurl}/payment/pay`,{"id":data})
  }

  getInvo(data: any){
    return this.http.get(`${this.logurl}/invoice/`+data).subscribe(()=>{})
  }
}
