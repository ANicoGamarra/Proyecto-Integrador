import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  logueado:boolean = false;
  private loggedo$ = new BehaviorSubject<boolean>(false);
  loading:boolean ;

  
  //"eve.holt@reqres.in" usuario para la api "https://reqres.in/api/login"

  constructor(private http: HttpClient) {
    this.loading = false;        
   }

  LogIn(){
    this.loggedo$.next(true);
  }
  
  LogOut(){
    this.loggedo$.next(false);
  }
  
  LogState() {
    return this.loggedo$.asObservable();
  }


//login walter

  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }

  setToken(token: string){
    this.loading=true;
    localStorage.setItem("token", token);
   
  }

  getToken(){
    localStorage.getItem("token");
    
  }  

}
