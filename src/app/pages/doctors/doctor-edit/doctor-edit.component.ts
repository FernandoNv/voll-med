import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DoctorsService } from '../doctors.service';
import { IDoctor } from '../model/doctor';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.scss'],
})
export class DoctorEditComponent {
  public doctor$!: Observable<IDoctor>;

  constructor(
    private doctorsService: DoctorsService,
    private ativatedRoute: ActivatedRoute
  ) {
    this.doctor$ = this.ativatedRoute.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return this.doctorsService.getDoctorById(id);
      })
    );
  }
}
