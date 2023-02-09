import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public loginFormGroup!: FormGroup;
  public hidePassword: boolean = true;
  public wrongPassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      usernameFormControl: ['', [Validators.required, Validators.email]],
      passwordFormControl: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public signin(): void {
    const formValues = this.loginFormGroup.getRawValue();
    const user = {
      username: formValues.usernameFormControl,
      password: formValues.passwordFormControl,
    };

    this.authService.authenticateUser(user).subscribe({
      next: (next) => {
        //redirect to home
        this.router.navigate(['home']);
      },
      error: (error) => {
        this.wrongPassword = true;
        console.log('Senha inválida');
      },
    });
  }

  public get usernameFormControl() {
    return this.loginFormGroup.get('username');
  }

  public get passwordFormControl() {
    return this.loginFormGroup.get('password');
  }
}
