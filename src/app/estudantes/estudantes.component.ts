import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { Pipe } from "@angular/core";

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  estudante: Estudante = {
    id: 1,
    name: 'Gabriela Sígolo',
    idade: 20,
    CPF: '460374638-59',
    telefone:'(11) 98980-2317'    
  }

  constructor() { }

  ngOnInit(): void {
  }

}

