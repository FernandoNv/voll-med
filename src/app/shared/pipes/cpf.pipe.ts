import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  transform(cpf: string, ...args: unknown[]): string {
    if (cpf) {
      const value = cpf.toString().replaceAll(/\D/g, '');
      if (value.length < 4) {
        return value;
      }

      if (value.length <= 6) {
        return value.replace(/(\d{3})(\d{1,3})/, '$1.$2');
      }

      if (value.length <= 9) {
        return value.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
      }

      if (value.length <= 11) {
        return value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
      }
    }

    return cpf;
  }

  removeTransformations(cpf: string | undefined): string | undefined {
    if (cpf) {
      return cpf.toString().replaceAll(/\D/g, '');
    }

    return cpf;
  }
}
