import { Injectable } from '@angular/core';
import { serverURL } from '../server';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private logurl = `${serverURL}/login`;

  constructor() { }
}
