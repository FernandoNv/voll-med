import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, Subject, take, takeUntil } from 'rxjs';
import { DeactivateAccountPopupComponent } from 'src/app/shared/components/deactivate-account-popup/deactivate-account-popup.component';
import { DeactivateAccountPopupService } from 'src/app/shared/components/deactivate-account-popup/deactivate-account-popup.service';
import { IItem } from 'src/app/shared/components/list-expansion-panel/list-expansion-panel.component';
import { IDialogData } from 'src/app/shared/models/dialog-data';
import { DoctorsService } from './doctors.service';
import { IDoctor } from './model/doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit, OnDestroy {
  private doctors$!: Observable<IDoctor[]>;
  private destroySubject$: Subject<boolean> = new Subject<boolean>();

  public isLoading!: boolean;
  public items$!: Observable<IItem[]>;

  constructor(
    private doctorsService: DoctorsService,
    private router: Router,
    private deactivateAccountPopupService: DeactivateAccountPopupService
  ) {
    this.doctorsService
      .loading()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((next) => {
        this.isLoading = next;
      });
    this.doctors$ = this.doctorsService.getDoctors();
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }

  ngOnInit(): void {
    this.items$ = this.doctors$.pipe(
      map((doctors) => this.mapperToItems(doctors))
    );
  }

  // prettier-ignore
  public mapperToItems(doctors: IDoctor[]): IItem[]{
    const list = doctors.map((item) => ({
      id: item.id,
      title: item.nome,
      description: `${item.especialidade} | ${item.crm}`,
      content: [item.email]
    })) as IItem[];

    return list;
  }

  public onEditButtonClicked(idDoctor: number): void {
    this.router.navigate(['/doctors/', idDoctor]);
  }

  public onDeactivateButtonClicked(idDoctor: number): void {
    this.doctorsService
      .getDoctorById(idDoctor)
      .pipe(take(1))
      .subscribe((doctor) => {
        const data: IDialogData = {
          informationName: doctor.nome,
          informationText: this.doctorsService.formatTextModal(doctor),
        };
        this.deactivateAccountPopupService.open(data);
      });
  }
}
