import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  logueado:boolean = false;

  constructor() { }


  getLogueado() {
    return this.logueado;
  }

  setLogueado(){
    if (this.logueado){
      this.logueado = false;
    } else{
      this.logueado = true;
    }
   
  }
}
