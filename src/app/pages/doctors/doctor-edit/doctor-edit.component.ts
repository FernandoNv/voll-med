import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DoctorsService } from '../doctors.service';
import { IDoctor, IEspecialidade } from '../model/doctor';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.scss'],
})
export class DoctorEditComponent implements OnInit {
  public doctor$!: Observable<IDoctor>;

  public listEspecialidade: string[] = Object.values(IEspecialidade);
  public UFs: string[] = [
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

  public ngOnInit(): void {
    console.log('init');
  }
}
