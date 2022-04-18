import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {tap, catchError } from 'rxjs/operators'
import { Experiencia } from './Experiencia';

const httpOptions = {
  headers: new HttpHeaders ({'Content-Type' : 'application/json', 'Access-Control-Allow-Origin': '*'})
}

@Injectable({
  providedIn: 'root'
})
export class DatosPorfolioService {



  ACERCADE:any[] = [
    {nombre:"Nicolas", apellido:"Gamarra", titulo: "Full Stack Developer Jr.", descripcion:" Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias sint consectetur voluptates et sunt sed deleniti reiciendis dolorum, nam, voluptatum aspernatur quibusdam dolore aut reprehenderit ab amet esse eum!" , imgPerfil:"/assets/imagenes/perfil2.jpg", imgPortada:"assets/imagenes/portal-2.jpg"}
  ];
  
  EXPERIENCIA:any[] = [
    { empresa: "AAAA", puesto:"asdf", ingreso:1111, salida:2222, descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam est libero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nam ratione volup", logoEmpresa:"https://material.angular.io/assets/img/examples/shiba2.jpg"   },
    { empresa: "BBBB", puesto:"qwre", ingreso:2222, salida:3333, descripcion:"magnam est libero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus am ratione volup", logoEmpresa:"https://material.angular.io/assets/img/examples/shiba2.jpg" },
    { empresa: "CCCC", puesto:"asdf", ingreso:3333, salida:4444, descripcion:"psum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam est libLorem iero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nam ratione volup", logoEmpresa: "https://material.angular.io/assets/img/examples/shiba2.jpg" }
  ];

  EDUCACION:any[] = [
    { instituto: "AAAA", titulo:"asdf", ingreso:1111, egreso:2222, descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam est libero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nam ratione volup", logoInstituto:"https://material.angular.io/assets/img/examples/shiba2.jpg", certificado:"https://material.angular.io/assets/img/examples/shiba2.jpg"   },
    { instituto: "BBBB", titulo:"qwre", ingreso:2222, egreso:3333, descripcion:"magnam est libero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus am ratione volup", logoInstituto:"https://material.angular.io/assets/img/examples/shiba2.jpg", certificado:"https://material.angular.io/assets/img/examples/shiba2.jpg" },
    { instituto: "CCCC", titulo:"asdf", ingreso:3333, egreso:4444, descripcion:"psum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam est libLorem iero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nam ratione volup", logoInstituto:"https://material.angular.io/assets/img/examples/shiba2.jpg", certificado: "https://material.angular.io/assets/img/examples/shiba2.jpg" }
  ];

  PROYECTOS:any[] = [
    { nombre: "AAAA", fecha:1111, descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam est libero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nam ratione volup", img:"https://material.angular.io/assets/img/examples/shiba2.jpg", link:"https://material.angular.io/assets/img/examples/shiba2.jpg"   },
    { nombre: "BBBB", fecha:2222, descripcion:"magnam est libero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus am ratione volup", img:"https://material.angular.io/assets/img/examples/shiba2.jpg", link:"https://material.angular.io/assets/img/examples/shiba2.jpg" },
    { nombre: "CCCC", fecha:3333, descripcion:"psum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam est libLorem iero facilis veniam odit recusandae, maxime omnis qui voluptates quas ea, ducimus facere nemo quibusdam nam ratione volup", img:"https://material.angular.io/assets/img/examples/shiba2.jpg", link: "https://material.angular.io/assets/img/examples/shiba2.jpg" }
  ];

  SKILLS:any[] = [
    { habilidad: "Dormir", porcentaje:20 },
    { habilidad: "Comer", porcentaje:90 },
    { habilidad: "Leer", porcentaje:70 },
    { habilidad: "Estudiar", porcentaje:85 },
    { habilidad: "Practicar", porcentaje:90 },
    { habilidad: "Tomar mate", porcentaje:99 },
    { habilidad: "Mirar series", porcentaje:25 },
    { habilidad: "Entrenar", porcentaje:10 },
  ];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

 // url="https://porfolio-api-ap.herokuapp.com/api"
  url="http://localhost:8080/api";
  log: any;

  constructor(private http:HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
    };
}

  /*
  getDatos(componente:string):Observable<any>{
    return this.http.get(this.url+"/"+componente+"/findAll");
    
  }
  */
  
  getDatos(componente:string): Observable<[]> {
    
    return this.http.get<[]>(`${this.url}/${componente}/findAll`).pipe(        
        tap(data => console.log(data)),
        catchError(this.handleError<[]>('getDatos', []))
   
        );
  
  }
  
  getDatoId(id: number, componente: string): Observable<any> {
    //console.log(`${this.url}/${componente}/`+id)
     const url = `${this.url}/${componente}/findById/`+id;
      return this.http.get<Experiencia>(url).pipe(
       tap(data => console.log(data)),
       catchError(this.handleError<any>(`getXp id=${id}`))
     );
   }
   
      
   updateDato(dato:any, componente: string): Observable<any> {
     console.log(this.url+'/'+componente+'/edit')
     console.log(dato)
     return this.http.put(this.url+'/'+componente+'/edit', dato, this.httpOptions).pipe(
         tap(_ => console.log(`xp id=${dato}`)),
         catchError(this.handleError<any>('updateXp'))
     );
   }

   addDato(dato:any, componente: string):Observable<any> {
     console.log(dato)
    return this.http.post<any>(this.url+'/'+componente+'/new', dato, this.httpOptions).pipe(
      tap((newDato: any) => console.log(`se agrego el dato =${newDato}`)),
      catchError(this.handleError<any>('addDato'))
    );
    }

    deleteDato(id:number, componente:string): Observable<any> {
      console.log(id)
      const url = `${this.url}/${componente}/delete/`+id;
      return this.http.delete<any>(url, this.httpOptions).pipe(
        tap(_ => console.log(`deleted id=${id}`)),
        catchError(this.handleError<any>('delete'))
      );
    }
  
 






}
