import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {
  hide = true;


  constructor(private router: Router) {}

  onSubmit(): void {
    
  }
  volverHome(){
    this.router.navigate([''])
  }

}
