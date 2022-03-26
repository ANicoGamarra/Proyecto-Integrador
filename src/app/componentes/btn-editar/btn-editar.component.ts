import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-editar',
  templateUrl: './btn-editar.component.html',
  styleUrls: ['./btn-editar.component.css']
})
export class BtnEditarComponent implements OnInit {

  @Output() abrirModal = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


}
