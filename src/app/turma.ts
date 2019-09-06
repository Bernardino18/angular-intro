import {Aluno} from './aluno';
export class Turma {
  nome: string;
  data_inicio: Date;
  alunos:Array<Aluno>;
  data_fim: Date;
  horas: number;
}
