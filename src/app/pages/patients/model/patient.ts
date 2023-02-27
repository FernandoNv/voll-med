import { IEndereco } from 'src/app/shared/services/address';

export interface IPatient {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  telefone?: string;
  endereco?: IEndereco;
}

export interface IUpdatePatient {
  id: number;
  nome: string;
  telefone: string;
  endereco: IEndereco;
}

export interface INewPatient {
  nome: string;
  telefone: string;
  email: string;
  cpf: string;
  endereco: IEndereco;
}
