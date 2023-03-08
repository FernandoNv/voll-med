import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { delay, filter, first, map, switchMap, tap } from 'rxjs/operators';
import { PatientsService } from 'src/app/pages/patients/patients.service';
import { CpfPipe } from 'src/app/shared/pipes/cpf.pipe';

//TODO: Find a way to only generate the requests
//when the input value it's different from the previous one
// distinctChange not working...
export class CpfValidator {
  static asyncValidator(patientsService: PatientsService, cpfPIpe: CpfPipe) {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        map((cpf) => cpfPIpe.removeTransformations(cpf) ?? ''),
        switchMap((cpf) => patientsService.exist(cpf, 'cpf')),
        map((cpfTaken) => (cpfTaken ? { cpfTaken: true } : null)),
        first()
      );
    };
  }

  static syncValidator(cpfPIpe: CpfPipe) {
    return (control: AbstractControl) => {
      const aux = cpfPIpe.removeTransformations(control.value) ?? '';
      if (aux.length < 11) {
        return { cpfPattern: true };
      }

      return null;
    };
  }
}
