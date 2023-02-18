export interface IEndereco {
  logradouro: string;
  bairro: string;
  cep: string;
  cidade: string;
  uf: string;
  complemento?: string;
  numero?: string;
  localidade?: string;
}
