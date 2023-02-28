import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, Observable, switchMap, take } from 'rxjs';
import { IPatient, IUpdatePatient } from '../model/patient';
import { PatientsService } from '../patients.service';
import { Location } from '@angular/common';
import { DeactivateAccountPopupService } from 'src/app/shared/components/deactivate-account-popup/deactivate-account-popup.service';
import { IDialogData } from 'src/app/shared/models/dialog-data';
import {
  IRegistrationFormInputValues,
  IRegistrationFormOption,
} from 'src/app/shared/models/registration-form';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss'],
})
export class EditPatientComponent {
  public patient$!: Observable<IPatient>;
  public success!: boolean;
  public message!: string;
  private idPatient!: number;

  constructor(
    private patientsService: PatientsService,
    private router: Router,
    private ativatedRoute: ActivatedRoute,
    private location: Location,
    private deactivateAccountPopupService: DeactivateAccountPopupService
  ) {
    this.patient$ = this.ativatedRoute.paramMap.pipe(
      switchMap((params) => {
        this.idPatient = Number(params.get('id'));
        return this.patientsService.getPatientById(this.idPatient);
      })
    );
  }

  public buildFormOptions(patient: IPatient): IRegistrationFormOption {
    const formOptions: IRegistrationFormOption = {
      type: 'patient',
      inputValues: {
        nome: patient.nome,
        cpf: patient.cpf,
        email: patient.email,
        telefone: patient.telefone ?? '',
        logradouro: patient.endereco?.logradouro ?? '',
        numero: patient.endereco?.numero ?? '',
        uf: patient.endereco?.uf ?? '',
        complemento: patient.endereco?.complemento ?? '',
        cidade: patient.endereco?.cidade ?? '',
        cep: patient.endereco?.cep ?? '',
        bairro: patient.endereco?.bairro ?? '',
      },
    };

    return formOptions;
  }

  public onSubmit(formValues: IRegistrationFormInputValues) {
    console.log('submit ', formValues);
    const updateValues: IUpdatePatient = {
      id: this.idPatient,
      nome: formValues.nome,
      telefone: formValues.telefone,
      endereco: {
        logradouro: formValues.logradouro,
        bairro: formValues.bairro,
        cidade: formValues.cidade,
        cep: formValues.cep,
        numero: formValues.numero,
        complemento: formValues.complemento,
        uf: formValues.uf,
      },
    };
    // salvar os dados
    this.patientsService
      .updateById(updateValues)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.message = 'Dados atualizados com sucesso';
          this.success = true;
          setTimeout(() => {
            this.location.back();
          }, 1000);
        },
        error: () => {
          this.message = 'Erro ao atualizar os dados';
          this.success = false;
        },
      });
  }

  public onDeactivateButtonClicked(): void {
    const modalOpen$ = this.patientsService.getPatientById(this.idPatient).pipe(
      take(1),
      switchMap((patient) => {
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
        switchMap((_) =>
          this.patientsService.deactivateAccountById(this.idPatient)
        )
      )
      .subscribe({
        next: (_) => {
          this.router.navigate(['/patients']);
        },
        error: (error) => {
          console.log('Erro with the deactivation');
          console.log(error);
          this.deactivateAccountPopupService.open();
        },
      });
  }
}
