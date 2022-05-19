import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { ESTUDANTES } from '../mock-students';


@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  estudantes = ESTUDANTES;

  estudante: Estudante = {
    id: 1,
    name: 'Gabriela Sígolo',
    idade: 20,
    CPF: '460374638-59',
    telefone:'(11) 98980-2317'    
  }

  selectedEstudante?: Estudante;
  onSelect(estudante: Estudante): void {
  this.selectedEstudante = estudante;
}

  constructor() { }

  ngOnInit(): void {
  }

}

