import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  
  private guardarDatos$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  actualizarVistaVerdadero(){
    this.guardarDatos$.next(true);
    console.log(this.guardarDatos$);
    console.log('por aca deberia pasar segundo')
  }
  
  actualizarVistaFalso(){
    this.guardarDatos$.next(false);
  }
  
  actualizarVistaEstado() {
    
    return this.guardarDatos$.asObservable();
  }
}
