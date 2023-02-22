import { Location } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  delay,
  distinctUntilChanged,
  filter,
  map,
  skip,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';
import { IEspecialidade } from 'src/app/pages/doctors/model/doctor';
import {
  IRegistrationFormInputValues,
  IRegistrationFormOption,
  UFs,
} from '../../models/registration-form';
import { CepPipe } from '../../pipes/cep.pipe';
import { PhonePipe } from '../../pipes/phone.pipe';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit, OnDestroy {
  @Input('form-options')
  public formOptions!: IRegistrationFormOption;

  @Input()
  public update: boolean = false;

  @Output('form-values-emitter')
  public formValuesEmitter = new EventEmitter<IRegistrationFormInputValues>();

  @Output('deactivate-account-emitter')
  public deactivateEmitter = new EventEmitter<void>();

  public listEspecialidade: string[] = Object.values(IEspecialidade);
  public UFs = UFs;
  public registrationForm!: FormGroup;

  private destroySubject$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private phonePipe: PhonePipe,
    private cepPipe: CepPipe,
    private location: Location
  ) {}

  public ngOnInit(): void {
    this.initForm();
    if (this.formOptions.inputValues) {
      this.updateFormValues();
    }
    this.initEventInputCep();
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }

  public onSubmit() {
    //prettier-ignore
    const formValues = this.registrationForm.getRawValue() as IRegistrationFormInputValues;
    if (formValues.numero === '') {
      formValues.numero = undefined;
    }
    if (formValues.complemento === '') {
      formValues.complemento = undefined;
    }

    formValues.cep = this.cepPipe.removeTransformations(formValues.cep);
    //prettier-ignore
    formValues.telefone = this.phonePipe.removeTransformations(formValues.telefone);
    //console.log('valid values', formValues);

    this.formValuesEmitter.emit(formValues);
  }

  public onDeactivateClicked(): void {
    this.deactivateEmitter.emit();
  }

  public onCancelClicked(): void {
    this.location.back();
  }

  private initForm() {
    this.registrationForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(100)]],
      crm: [
        '',
        this.formOptions.type === 'doctor'
          ? [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(6),
            ]
          : undefined,
      ],
      cpf: [
        '',
        this.formOptions.type === 'patient'
          ? [
              Validators.required,
              Validators.minLength(11),
              Validators.maxLength(15),
            ]
          : undefined,
      ],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(100)],
      ],
      especialidade: ['', [Validators.required, Validators.maxLength(100)]],
      telefone: ['', [Validators.required, Validators.maxLength(20)]],
      logradouro: ['', [Validators.required, Validators.required]],
      numero: ['', [Validators.maxLength(20)]],
      uf: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(2)],
      ],
      complemento: ['', [Validators.maxLength(100)]],
      cidade: ['', [Validators.required, Validators.maxLength(100)]],
      cep: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(9)],
      ],
      bairro: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  private updateFormValues() {
    const inputsValues = this.formOptions.inputValues;
    this.registrationForm.patchValue({
      nome: inputsValues?.nome ?? '',
      crm: inputsValues?.crm,
      cpf: inputsValues?.cpf,
      email: inputsValues?.email,
      especialidade: inputsValues?.especialidade,
      telefone: this.phonePipe.transform(inputsValues?.telefone ?? ''),
      logradouro: inputsValues?.logradouro ?? '',
      numero: inputsValues?.numero ?? '',
      uf: inputsValues?.uf ?? '',
      complemento: inputsValues?.complemento ?? '',
      cidade: inputsValues?.cidade ?? '',
      cep: this.cepPipe.transform(inputsValues?.cep ?? ''),
      bairro: inputsValues?.bairro ?? '',
    });

    this.registrationForm.get('crm')?.disable();
    this.registrationForm.get('cpf')?.disable();
    this.registrationForm.get('email')?.disable();
    this.registrationForm.get('especialidade')?.disable();
  }

  private initEventInputCep() {
    const cepFormControl = this.registrationForm.get('cep') as FormControl;
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
        this.registrationForm.patchValue({
          logradouro: next.logradouro,
          uf: next.uf,
          cidade: next.localidade,
          bairro: next.bairro,
        });
      });
  }

  public get nome() {
    return this.registrationForm.get('nome');
  }

  public get crm() {
    return this.registrationForm.get('crm');
  }

  public get email() {
    return this.registrationForm.get('email');
  }

  public get especialidade() {
    return this.registrationForm.get('especialidade');
  }

  public get telefone() {
    return this.registrationForm.get('telefone');
  }

  public get logradouro() {
    return this.registrationForm.get('logradouro');
  }

  public get numero() {
    return this.registrationForm.get('numero');
  }

  public get uf() {
    return this.registrationForm.get('uf');
  }

  public get complemento() {
    return this.registrationForm.get('complemento');
  }

  public get cidade() {
    return this.registrationForm.get('cidade');
  }

  public get cep() {
    return this.registrationForm.get('cep');
  }

  public get bairro() {
    return this.registrationForm.get('bairro');
  }

  public get cpf() {
    return this.registrationForm.get('cpf');
  }
}
