import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import {
  IRegistrationFormInputValues,
  IRegistrationFormOption,
} from 'src/app/shared/models/registration-form';
import { DoctorsService } from '../doctors.service';
import { IEspecialidade, INewDoctor } from '../model/doctor';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.scss'],
})
export class NewDoctorComponent implements OnInit {
  public formOptions!: IRegistrationFormOption;
  public message: string = '';
  public success: boolean = false;

  constructor(
    private doctorsService: DoctorsService,
    private location: Location
  ) {}

  public ngOnInit(): void {
    this.formOptions = {
      type: 'doctor',
    };
  }

  public onSubmit(formValues: IRegistrationFormInputValues) {
    const newDoctor: INewDoctor = {
      nome: formValues.nome,
      telefone: formValues.telefone,
      crm: formValues.crm as string,
      email: formValues.email,
      especialidade: formValues.especialidade as IEspecialidade,
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
    console.log('submit ', newDoctor);
    // salvar os dados
    this.doctorsService
      .newDoctor(newDoctor)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.message = 'Dados salvos com sucesso';
          this.success = true;
          setTimeout(() => {
            this.location.back();
          }, 1000);
        },
        error: () => {
          this.message = 'Erro ao cadastrar os dados';
          this.success = false;
        },
      });
  }
}
