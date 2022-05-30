import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Usuario } from './interfaces/Usuario';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  url="https://api-portfolio-arg-programa.herokuapp.com/api/login";
  user: Usuario = { 
    id_usuario:0, 
    nombreUsuario:'', 
    email:'',
    password:'',
    id_persona:0,
    foto_perfil:'',
    foto_portada:'',
    token:'' }; 

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<Usuario>;

  constructor(private http: HttpClient, private loggedService:LoginServiceService) {
      this.currentUserSubject = new BehaviorSubject<any >(JSON.parse(sessionStorage.getItem('currentUser') || '{}' ));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
      return this.currentUserSubject.value;
  }

  loggedIn(): void {
    this.loggedService.LogIn()
  }

  loggedOut(): void {
    this.loggedService.LogOut();
  }

  logState(): void {
    this.loggedService.LogState();
  }



  iniciarSesion(username: string, password: string) {
    this.user.nombreUsuario = username;
    this.user.password = password;
   
      return this.http.post(this.url, this.user)
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              sessionStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              console.log( this.currentUserSubject.value.token)
              this.loggedIn();
              return user;
             
          }));
          
  }

  cerrarSesion() {
      // remove user from local storage to log user out
      sessionStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      this.loggedOut();
  }
}
