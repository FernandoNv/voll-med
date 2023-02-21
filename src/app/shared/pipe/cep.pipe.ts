import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep',
})
export class CepPipe implements PipeTransform {
  transform(cep: string, ...args: unknown[]): string {
    if (cep) {
      const value = cep.toString().replace(/\D/g, '');

      if (cep.length > 7) {
        return value.replace(/(\d{5})(\d{3})/, '$1-$2');
      }
    }

    return cep;
  }

  removeTransformations(cep: string) {
    return cep.replaceAll('-', '');
  }
}
