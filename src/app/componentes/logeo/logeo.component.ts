import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logeo',
  templateUrl: './logeo.component.html',
  styleUrls: ['./logeo.component.css']
})
export class LogeoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  volverHome(){
    this.router.navigate([''])
  }

}
