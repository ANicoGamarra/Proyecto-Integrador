import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-foto-perfil-modal',
  templateUrl: './foto-perfil-modal.component.html',
  styleUrls: ['./foto-perfil-modal.component.css']
})
export class FotoPerfilModalComponent implements OnInit {

  @Input() datos:any; 

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
