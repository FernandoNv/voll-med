import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  delay,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  skip,
  skipWhile,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { DoctorsService } from '../doctors.service';
import { IDoctor, IEspecialidade } from '../model/doctor';
import { Location } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AddressService } from 'src/app/shared/service/address.service';
import { PhonePipe } from 'src/app/shared/pipe/phone.pipe';
import { CepPipe } from 'src/app/shared/pipe/cep.pipe';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.scss'],
})
export class DoctorEditComponent implements OnInit, OnDestroy {
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

  private destroySubject$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private doctorsService: DoctorsService,
    private ativatedRoute: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private phonePipe: PhonePipe,
    private cepPipe: CepPipe
  ) {
    this.initForm();
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
          telefone: this.phonePipe.transform(next.telefone ?? ''),
          logradouro: next.endereco?.logradouro,
          numero: next.endereco?.numero,
          uf: next.endereco?.uf,
          complemento: next.endereco?.complemento,
          cidade: next.endereco?.cidade,
          cep: this.cepPipe.transform(next.endereco?.cep ?? ''),
          bairro: next.endereco?.bairro,
        });
      })
    );
  }

  private initForm() {
    this.doctorEditForm = this.formBuilder.group({
      nome: [''],
      crm: [{ value: '', disabled: true }],
      email: [{ value: '', disabled: true }],
      especialidade: [{ value: '', disabled: true }],
      telefone: [''],
      logradouro: [''],
      numero: [''],
      uf: ['', [Validators.minLength(2), Validators.maxLength(2)]],
      complemento: [''],
      cidade: [''],
      cep: ['', [Validators.minLength(8), Validators.maxLength(8)]],
      bairro: [''],
    });
  }

  private initEventInputCep() {
    const cepFormControl = this.doctorEditForm.get('cep') as FormControl;
    cepFormControl.valueChanges
      .pipe(
        takeUntil(this.destroySubject$),
        delay(300),
        distinctUntilChanged(),
        skip(1),
        map((value: string) => value.replace(/\D/g, '')),
        filter((value) => value.length > 7),
        switchMap((value) => this.addressService.getAddress(value))
      )
      .subscribe((next) => {
        // console.log(next);
        this.doctorEditForm.patchValue({
          logradouro: next.logradouro,
          uf: next.uf,
          cidade: next.localidade,
          bairro: next.bairro,
        });
      });
  }

  public onSubmit() {
    const formValues = this.doctorEditForm.getRawValue();
    console.log(formValues);
  }

  public ngOnInit(): void {
    this.initEventInputCep();
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }

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
