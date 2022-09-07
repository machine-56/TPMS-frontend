import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private _auth:LoginService){}
  canActivate():boolean{
    if(this._auth.loggedIn()){
      return true
    }else{
      this.router.navigate(['']);
      return false;
    }
  }
    
  
  
}
