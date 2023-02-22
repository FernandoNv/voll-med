import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEndereco } from './address';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private httpCliente: HttpClient) {}

  public getAddress(cep: string): Observable<IEndereco> {
    cep = cep.replace(/\D/g, '');
    console.log(cep);
    const url = `https://viacep.com.br/ws/${cep}/json`;

    return this.httpCliente.get<IEndereco>(url);
  }
}
