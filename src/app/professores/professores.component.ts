import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  professores: Professor[] = [];
  professor: Professor = {
    id: 1,
    nome: 'Angelina Melaré',
    CPF: '350.389.398-89'
  }

  selectedProfessor?: Professor;
  onSelect(professor: Professor): void {
    this.selectedProfessor = professor;
  }

  constructor(private professorService: ProfessorService) { }

  getProfessores(): void {
    this.professorService.getProfessores()
      .subscribe(professores => this.professores = professores);
  }

  ngOnInit(): void {
    this.getProfessores();
  }

}
