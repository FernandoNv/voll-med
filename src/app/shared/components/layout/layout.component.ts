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
    { path: '/', description: 'Início' },
    { path: '/doctors', description: 'Médicos' },
    { path: '/patients', description: 'Pacientes' },
    { path: '/appointments', description: 'Consultas' },
    { path: '/person', description: 'Minha conta' },
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
        }
        if (data instanceof ActivationStart) {
          const newTitle = data.snapshot.routeConfig?.title;
          // console.log({ newTitle });
          // prettier-ignore
          this.title = newTitle ? (newTitle as string) : this.title;
          this.title = this.title !== 'Início' ? this.title : '';
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
      .subscribe((_) => {
        this.router.navigate(['../sign-in']);
      });
  }
}
