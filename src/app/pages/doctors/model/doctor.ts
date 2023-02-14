export interface IDoctor {
  id: string;
  nome: string;
  crm: string;
  especialidade: IEspecialidade;
}

export enum IEspecialidade {
  ORTOPEDIA,
  CARDIOLOGIA,
  GINECOLOGIA,
  DERMATOLOGIA,
}
