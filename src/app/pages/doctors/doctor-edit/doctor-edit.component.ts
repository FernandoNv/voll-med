import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { DoctorsService } from '../doctors.service';
import { IDoctor, IEspecialidade } from '../model/doctor';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  public doctorEditForm!: FormGroup;

  constructor(
    private doctorsService: DoctorsService,
    private ativatedRoute: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.doctorEditForm = this.formBuilder.group({
      nome: [''],
      crm: [{ value: '', disabled: true }],
      email: [{ value: '', disabled: true }],
      especialidade: [{ value: '', disabled: true }],
      telefone: [''],
      logradouro: [''],
      numero: [''],
      uf: [''],
      complemento: [''],
      cidade: [''],
      cep: [''],
      bairro: [''],
    });

    this.doctor$ = this.ativatedRoute.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return this.doctorsService.getDoctorById(id);
      }),
      tap((next) => {
        this.doctorEditForm.patchValue({
          nome: next.nome,
          crm: next.crm,
          email: next.email,
          especialidade: next.especialidade,
          telefone: next.telefone,
          logradouro: next.endereco?.logradouro,
          numero: next.endereco?.numero,
          uf: next.endereco?.uf,
          complemento: next.endereco?.complemento,
          cidade: next.endereco?.cidade,
          cep: next.endereco?.cep,
          bairro: next.endereco?.bairro,
        });
      })
    );
  }

  public onSubmit() {
    console.log('atualizar as informações');
  }

  public ngOnInit(): void {}

  public onCancelClicked() {
    this.location.back();
  }

  public get nome() {
    return this.doctorEditForm.get('nome');
  }

  public get crm() {
    return this.doctorEditForm.get('crm');
  }

  public get email() {
    return this.doctorEditForm.get('email');
  }

  public get especialidade() {
    return this.doctorEditForm.get('especialidade');
  }

  public get telefone() {
    return this.doctorEditForm.get('telefone');
  }

  public get logradouro() {
    return this.doctorEditForm.get('logradouro');
  }

  public get numero() {
    return this.doctorEditForm.get('numero');
  }

  public get uf() {
    return this.doctorEditForm.get('uf');
  }

  public get complemento() {
    return this.doctorEditForm.get('complemento');
  }

  public get cidade() {
    return this.doctorEditForm.get('cidade');
  }

  public get cep() {
    return this.doctorEditForm.get('cep');
  }

  public get bairro() {
    return this.doctorEditForm.get('bairro');
  }
}
