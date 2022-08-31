import { Injectable } from '@angular/core';
import {serverURL} from '../server';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private logurl = `${serverURL}/admin`;
  constructor(private http:HttpClient) { }
   newWorkorder(item:any)
  { 
    return this.http.post(`${this.logurl}`+'/insert',{"workorder":item})
    .subscribe((data: any) =>{console.log(data)})
  }
  getWorkorders(){
    return this.http.get(`${this.logurl}`+`/workorders`);
  }
  getWorkorderById(woId:any){
    return this.http.get(`${this.logurl}`+`/workorders/`+woId);
  }
  deleteWorkorder(id:any){
    return this.http.delete(`${this.logurl}`+`/workorders/remove/`+id);
  }
  getUsers(){
    console.log('reached');
    return this.http.get(`${this.logurl}`+`/users`);
  }
  deletefn(data: any){
    return this.http.delete(`${this.logurl}/users/remove/`+data)
  }
  apvfn(data: any){
    console.log(data)
    return this.http.post(`${this.logurl}/users/apv`,{"id":data})
  }
}
