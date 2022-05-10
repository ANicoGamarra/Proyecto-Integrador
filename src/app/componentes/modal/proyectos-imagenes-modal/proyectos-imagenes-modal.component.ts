import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proyectos-imagenes-modal',
  templateUrl: './proyectos-imagenes-modal.component.html',
  styleUrls: ['./proyectos-imagenes-modal.component.css']
})
export class ProyectosImagenesModalComponent implements OnInit {

  @Input()  id!:number;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
