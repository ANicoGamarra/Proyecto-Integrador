import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proyectos-modal',
  templateUrl: './proyectos-modal.component.html',
  styleUrls: ['./proyectos-modal.component.css']
})
export class ProyectosModalComponent implements OnInit {

  
  @Input() datos:any;
  @Input() id:number | undefined;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
