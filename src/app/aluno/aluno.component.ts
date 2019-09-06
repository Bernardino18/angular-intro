import { Component, Input } from '@angular/core';

@Component({
  selector: 'aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent{
  @Input() nome: string;
  @Input() idade: number;
}