import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  /* logueado:boolean = false; */
  private loggedo$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  LogIn(){
    this.loggedo$.next(true);
  }
  
  LogOut(){
    this.loggedo$.next(false);
  }
  
  LogState() {
    return this.loggedo$.asObservable();
  }

  /* getLogueado() {
    return this.logueado;
  }

  setLogueado(){
    if (this.logueado){
      this.logueado = false;
    } else{
      this.logueado = true;
    }
   
  } */
}
