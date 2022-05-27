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
  url:string = "https://api-portfolio-arg-programa.herokuapp.com/api"
 

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


}
