export interface IPerson {
  id: number;
  nome: string;
  imagemUrl: string;
  login: string;
  genero: Genero;
  dataNascimento: Date;
}

export interface IUpdatePerson {
  id: number;
  nome?: string;
  imagemUrl?: string;
  login?: string;
  senha?: string;
  genero?: Genero;
  dataNascimento?: Date;
}

export enum Genero {
  'MASCULINO',
  'FEMININO',
  'NAO_INFORMADO',
}
