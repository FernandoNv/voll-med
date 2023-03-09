import { AbstractControl } from '@angular/forms';
import {
  delay,
  distinctUntilChanged,
  filter,
  first,
  map,
  switchMap,
} from 'rxjs/operators';
import { DoctorsService } from 'src/app/pages/doctors/doctors.service';
import { PatientsService } from 'src/app/pages/patients/patients.service';
//TODO: Find a way to only generate the requests
//when the input value it's different from the previous one
// distinctUntilChanged not working...
export class EmailValidator {
  static validator(service: PatientsService | DoctorsService) {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        delay(400),
        switchMap((email) => service.exist(email, 'email')),
        map((emailTaken) => (emailTaken ? { emailTaken: true } : null)),
        first()
      );
    };
  }
}
