import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  user=localStorage.getItem('role')

  constructor() { }

  checkroleSAdm(){
    if(this.user==='Superadmin'){
      return true;
    }else{
      return false;
    }
  }
  checkroleAdm(){
    if(this.user==='Admin'){
      return true;
    }else{
      return false;
    }
  }
  checkroleFin(){
    if(this.user==='Finance'){
      return true;
    }else{
      return false;
    }
  }
  checkrolePtr(){
    if(this.user==='Partner'){
      return true;
    }else{
      return false;
    }
  }

}
