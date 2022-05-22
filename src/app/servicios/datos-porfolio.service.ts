import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {tap, catchError } from 'rxjs/operators'
import { Experiencia } from './interfaces/Experiencia';

const httpOptions = {
  headers: new HttpHeaders ({'Content-Type' : 'application/json', 'Access-Control-Allow-Origin': '*'})
}

@Injectable({
  providedIn: 'root'
})
export class DatosPorfolioService {

  

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
    })
  };

    url="https://api-portfolio-arg-programa.herokuapp.com/api";
    //url2="https://argentina-programa-api-sinjwt.herokuapp.com/api"
    
    //url="http://localhost:8080/api";
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
/*
getAll(): Observable<any> {
  console.log("pasa por getAll?")
  return this.http.get(this.url2+'/educacion');
}
*/  
  getDatos(componente:string): Observable<any> {
    
    return this.http.get(`${this.url}/${componente}/findAll`).pipe(        
        tap(data => console.log(data)),
        catchError(this.handleError<[]>('getDatos', []))
   
        );
  
  }
  
  getDatoId(id: number, componente: string): Observable<any> {
    //console.log(`${this.url}/${componente}/`+id)
     const url = `${this.url}/${componente}/findById/`+id;
      return this.http.get<Experiencia>(url, httpOptions).pipe(
       tap(data => console.log(data)),
       catchError(this.handleError<any>(`getXp id=${id}`))
     );
   }
   
      
   updateDato(dato:any, componente: string): Observable<any> {
     console.log(this.url+'/'+componente+'/edit')
     console.log(dato)
     return this.http.put(this.url+'/'+componente+'/edit', dato).pipe(
         tap(_ => console.log(`xp id=${dato}`)),
         catchError(this.handleError<any>('updateXp'))
     );
   }

   addDato(dato:any, componente: string):Observable<any> {
     console.log(dato)
      return this.http.post<any>(this.url+'/'+componente+'/new', dato, httpOptions).pipe(
        tap((newDato: any) => console.log(`se agrego el dato =${newDato}`)),
        catchError(this.handleError<any>('addDato'))
      );
    }

    deleteDato(id:number, componente:string): Observable<any> {
      console.log(id)
      const url = `${this.url}/${componente}/delete/`+id;
      return this.http.delete<any>(url, httpOptions ).pipe(
        tap(_ => console.log(`deleted id=${id}`)),
        catchError(this.handleError<any>('delete'))
      );
    }
  
 






}
