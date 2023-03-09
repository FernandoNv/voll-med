import { AbstractControl } from '@angular/forms';
import { delay, filter, first, map, switchMap } from 'rxjs/operators';
import { DoctorsService } from 'src/app/pages/doctors/doctors.service';
//TODO: Find a way to only generate the requests
//when the input value it's different from the previous one
// distinctChange not working...
export class CrmValidator {
  static validator(doctorsService: DoctorsService) {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        delay(400),
        filter((crm) => crm.length >= 6),
        switchMap((crm) => doctorsService.exist(crm, 'crm')),
        map((crmTaken) => (crmTaken ? { crmTaken: true } : null)),
        first()
      );
    };
  }
}
