export interface IDoctor {
  id: number;
  nome: string;
  email: string;
  crm: string;
  especialidade: IEspecialidade;
  telefone?: string;
  endereco?: IEndereco;
}

export interface IEndereco {
  logradouro: string;
  bairro: string;
  cep: string;
  cidade: string;
  uf: string;
  complemento?: string;
  numero?: string;
}

export enum IEspecialidade {
  ORTOPEDIA,
  CARDIOLOGIA,
  GINECOLOGIA,
  DERMATOLOGIA,
}
