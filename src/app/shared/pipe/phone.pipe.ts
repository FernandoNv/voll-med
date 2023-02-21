import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(phone: string, ...args: unknown[]): string {
    if (phone) {
      const value = phone.toString().replace(/\D/g, '');

      let foneFormatado = '';

      if (value.length > 12) {
        foneFormatado = value.replace(
          /(\d{2})?(\d{2})?(\d{5})?(\d{4})/,
          '+$1 ($2) $3-$4'
        );
      } else if (value.length > 11) {
        foneFormatado = value.replace(
          /(\d{2})?(\d{2})?(\d{4})?(\d{4})/,
          '+$1 ($2) $3-$4'
        );
      } else if (value.length > 10) {
        foneFormatado = value.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');
      } else if (value.length > 9) {
        foneFormatado = value.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');
      } else if (value.length > 5) {
        foneFormatado = value.replace(
          /^(\d{2})?(\d{4})?(\d{0,4})/,
          '($1) $2-$3'
        );
      } else if (value.length > 1) {
        foneFormatado = value.replace(/^(\d{2})?(\d{0,5})/, '($1) $2');
      } else {
        if (phone !== '') {
          foneFormatado = value.replace(/^(\d*)/, '($1');
        }
      }
      return foneFormatado;
    }

    return phone;
  }

  removeTransformations(phone: string) {
    phone = phone.replaceAll('-', '');
    phone = phone.replaceAll(' ', '');
    phone = phone.replaceAll('(', '');
    return phone.replaceAll(')', '');
  }
}
