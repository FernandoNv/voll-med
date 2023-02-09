import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationStart, NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/auth/user.service';
import { Location } from '@angular/common';

interface IItemsMenu {
  path?: string;
  description: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  private destroySubject$: Subject<boolean> = new Subject<boolean>();

  public title: string = '';
  public showBackButton: boolean = true;
  public showHeader: boolean = true;
  public itemsMenu: IItemsMenu[] = [
    { path: '/doctors', description: 'Médicos' },
    { path: '/patients', description: 'Pacientes' },
    { path: '/appointments', description: 'Consultas' },
    { path: '/user', description: 'Minha conta' },
    { description: 'Sair' },
  ];

  constructor(
    private router: Router,
    private userService: UserService,
    private location: Location
  ) {}

  public ngOnInit(): void {
    this.router.events
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((data) => {
        // console.log({ data });
        if (data instanceof NavigationEnd) {
          const url = data.urlAfterRedirects.slice(1);
          this.showBackButton = !url.startsWith('home');
          if (url.startsWith('home')) {
            this.title = '';
          }
          if (url.startsWith('patients')) {
            this.title = 'Paciêntes';
          }

          if (url.startsWith('doctors')) {
            this.title = 'Médicos';
          }

          if (url.startsWith('appointments')) {
            this.title = 'Consultas';
          }
        }
        if (data instanceof ActivationStart) {
          // console.log({ ActivationStart: data });
          this.showHeader = data.snapshot.data['showHeader'];
        }
      });
  }

  public goBack(): void {
    this.location.back();
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }

  public logout(): void {
    this.userService.signOut();
    this.userService
      .getUser()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((next) => {
        this.router.navigate(['../sign-in']);
      });
  }
}
