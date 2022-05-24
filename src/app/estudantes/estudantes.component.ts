import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { EstudanteService } from '../estudante.service';


@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  estudantes: Estudante[] = [];

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

  constructor(private estudanteService: EstudanteService) { }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
        .subscribe(estudantes => this.estudantes = estudantes);
  }

  ngOnInit(): void {
    this.getEstudantes();
  }

}

  


