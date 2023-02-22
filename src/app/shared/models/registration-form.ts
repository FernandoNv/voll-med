export interface IRegistrationFormInputValues {
  nome: string;
  crm?: string;
  cpf?: string;
  email: string;
  especialidade: string;
  telefone: string;
  logradouro: string;
  numero?: string;
  uf: string;
  complemento?: string;
  cidade: string;
  cep: string;
  bairro: string;
}

export interface IRegistrationFormOption {
  type: 'doctor' | 'patient';
  inputValues?: IRegistrationFormInputValues;
}

export const UFs: string[] = [
  'MG',
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
].sort((a, b) => (b > a ? -1 : 1));
