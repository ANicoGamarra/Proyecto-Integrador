import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-inicio-sesion',
  templateUrl: './btn-inicio-sesion.component.html',
  styleUrls: ['./btn-inicio-sesion.component.css']
})
export class BtnInicioSesionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  iniciarSesion(){
    this.router.navigate(['logeo']);   
  }
  
}
