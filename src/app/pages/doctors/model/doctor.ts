import { IEndereco } from 'src/app/shared/service/address';

export interface IDoctor {
  id: number;
  nome: string;
  email: string;
  crm: string;
  especialidade: IEspecialidade;
  telefone?: string;
  endereco?: IEndereco;
}

export enum IEspecialidade {
  ORTOPEDIA = 'Ortopedia',
  CARDIOLOGIA = 'Cardiologia',
  GINECOLOGIA = 'Ginecologia',
  DERMATOLOGIA = 'Dermatologia',
}
