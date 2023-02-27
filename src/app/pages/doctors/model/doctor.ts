import { IEndereco } from 'src/app/shared/services/address';

export interface IDoctor {
  id: number;
  nome: string;
  email: string;
  crm: string;
  especialidade: IEspecialidade;
  telefone?: string;
  endereco?: IEndereco;
}

export interface IUpdateDoctor {
  id: number;
  nome: string;
  telefone: string;
  endereco: IEndereco;
}

export interface INewDoctor {
  nome: string;
  email: string;
  telefone: string;
  crm: string;
  especialidade: IEspecialidade;
  endereco: IEndereco;
}

export enum IEspecialidade {
  ORTOPEDIA = 'Ortopedia',
  CARDIOLOGIA = 'Cardiologia',
  GINECOLOGIA = 'Ginecologia',
  DERMATOLOGIA = 'Dermatologia',
}
