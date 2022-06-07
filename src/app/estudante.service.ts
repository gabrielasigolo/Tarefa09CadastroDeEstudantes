import { Injectable } from '@angular/core';
import { Estudante } from './estudante';
import { ESTUDANTES } from './mock-students';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  // private heroesUrl = ;

  /** Log a HeroService message with the MessageService */
    private log(message: string) {
      this.messageService.add(`StudentService: ${message}`);
    }

  getEstudantes(): Observable<Estudante[]> {
    const estudantes = of(ESTUDANTES);
    this.messageService.add('EstudanteService: fetched estudantes');
    return estudantes;
  }
}
