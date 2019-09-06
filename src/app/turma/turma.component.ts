import { Component, Input } from '@angular/core';
import {Turma} from '../turma';
import {Aluno} from '../aluno';
import {alunos} from '../alunos';
@Component({
  selector: 'turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent {
  
  turma:Turma = {
    nome: 'TPSI',
    data_inicio: new Date(2019,10,20),
    data_fim:new Date(2019,11,22),
    horas:50,
    alunos: alunos
  };
}