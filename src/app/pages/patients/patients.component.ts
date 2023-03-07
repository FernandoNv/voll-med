import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  filter,
  map,
  Observable,
  Subject,
  switchMap,
  take,
  takeUntil,
} from 'rxjs';
import { DeactivateAccountPopupService } from 'src/app/shared/components/deactivate-account-popup/deactivate-account-popup.service';
import { IItem } from 'src/app/shared/components/list-expansion-panel/list-expansion-panel.component';
import { IDialogData } from 'src/app/shared/models/dialog-data';
import { CpfPipe } from 'src/app/shared/pipes/cpf.pipe';
import { IPatient } from './model/patient';
import { PatientsService } from './patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit, OnDestroy {
  patients$!: Observable<IPatient[]>;
  private destroySubject$: Subject<boolean> = new Subject<boolean>();

  public isLoading!: boolean;
  public items$!: Observable<IItem[]>;

  constructor(
    private patientsService: PatientsService,
    private router: Router,
    private deactivateAccountPopupService: DeactivateAccountPopupService,
    private cpfPipe: CpfPipe
  ) {
    this.patientsService
      .loading()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((next) => {
        this.isLoading = next;
      });
  }

  public ngOnInit(): void {
    this.setItems();
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }

  private setItems() {
    this.patients$ = this.patientsService.getPatients();
    this.items$ = this.patients$.pipe(
      map((patients) => this.mapperToItems(patients))
    );
  }

  // prettier-ignore
  private mapperToItems(patients: IPatient[]): IItem[]{
    const list = patients.map((item) => ({
      id: item.id,
      title: item.nome,
      description: `${this.cpfPipe.transform(item.cpf)}`,
      content: [item.email]
    })) as IItem[];

    return list;
  }

  onEditButtonClicked(idPatient: number) {
    this.router.navigate(['/patients/edit', idPatient]);
  }

  onDeactivateButtonClicked(idPatient: number) {
    const modalOpen$ = this.patientsService.getPatientById(idPatient).pipe(
      take(1),
      switchMap((patient) => {
        patient.cpf = this.cpfPipe.transform(patient.cpf);
        const data: IDialogData = {
          informationName: patient.nome,
          informationText: this.patientsService.formatTextModal(patient),
        };
        return this.deactivateAccountPopupService.open(data);
      })
    );

    modalOpen$
      .pipe(
        filter((deactivate) => deactivate === true),
        switchMap((_) => this.patientsService.deactivateAccountById(idPatient))
      )
      .subscribe({
        next: (_) => {
          this.setItems();
        },
        error: (error) => {
          console.log('Erro with the deactivation');
          console.log(error);
          this.deactivateAccountPopupService.open();
        },
      });
  }
}
