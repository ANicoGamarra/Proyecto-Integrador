import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  logueado:boolean = false;
  private loggedo$ = new BehaviorSubject<boolean>(false);
  loading:boolean ;

  url= "http://npinti.ddns.net:9008/api/auth/login"   //ArgentinaPrograma
  currentUserSubject: BehaviorSubject<any>;           //ArgentinaPrograma
  //"eve.holt@reqres.in" usuario para la api "https://reqres.in/api/login"

  constructor(private http: HttpClient) {
    this.loading = false;
    //console.log("El servicio de autentificación está corriendo");     //ArgentinaPrograma
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}')); //ArgentinaPrograma
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
    /* console.log(token);
    if(token !== null){
      this.LogIn();
    }
     */
  }

  getToken(){
    localStorage.getItem("token");
    
  }
  
  //login Argentina Programa modulo 85

  iniciarSesion(credenciales:any):Observable<any> {

    return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));



      return data;
    }))
  }



}
