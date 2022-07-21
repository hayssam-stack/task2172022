import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url= 'http://gymnslim.com:3459/users';

  constructor(private http: HttpClient) { }


  getdata(){
    return this.http.get(this.base_url);
  }
}
