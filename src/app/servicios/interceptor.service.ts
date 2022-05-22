import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutentificacionService } from './autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private autenticationServ: AutentificacionService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
  // add auth header with jwt if user is logged in and request is to the api url
  const currentUser = this.autenticationServ.currentUserValue;
  const isLoggedIn = currentUser && currentUser.token;
  // const isApiUrl = request.url.startsWith(environment.apiUrl);
  if (isLoggedIn) {
      req = req.clone({
          setHeaders: {
              auth: `${currentUser.token}`
          }
      });
  }

  return next.handle(req);
}
}
