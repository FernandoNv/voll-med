import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, take } from 'rxjs';
import {
  IRegistrationFormInputValues,
  IRegistrationFormOption,
} from 'src/app/shared/model/registration-form';
import { DoctorsService } from '../doctors.service';
import { IDoctor, IUpdateDoctor } from '../model/doctor';
import { Location } from '@angular/common';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.scss'],
})
export class DoctorEditComponent {
  public doctor$!: Observable<IDoctor>;
  public success!: boolean;
  public message!: string;

  private idDoctor!: number;

  constructor(
    private doctorsService: DoctorsService,
    private ativatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.doctor$ = this.ativatedRoute.paramMap.pipe(
      switchMap((params) => {
        this.idDoctor = Number(params.get('id'));
        return this.doctorsService.getDoctorById(this.idDoctor);
      })
    );
  }

  public buildFormOptions(doctor: IDoctor): IRegistrationFormOption {
    const formOptions: IRegistrationFormOption = {
      type: 'doctor',
      inputValues: {
        nome: doctor.nome,
        crm: doctor.crm,
        email: doctor.email,
        especialidade: doctor.especialidade,
        telefone: doctor.telefone ?? '',
        logradouro: doctor.endereco?.logradouro ?? '',
        numero: doctor.endereco?.numero ?? '',
        uf: doctor.endereco?.uf ?? '',
        complemento: doctor.endereco?.complemento ?? '',
        cidade: doctor.endereco?.cidade ?? '',
        cep: doctor.endereco?.cep ?? '',
        bairro: doctor.endereco?.bairro ?? '',
      },
    };

    return formOptions;
  }

  public onSubmit(formValues: IRegistrationFormInputValues) {
    console.log('submit ', formValues);
    const updateValues: IUpdateDoctor = {
      id: this.idDoctor,
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
    this.doctorsService
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

  public onDeactivateAccount(): void {
    console.log('abrir pop up para desativar a conta');
  }
}
