import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { IItem } from 'src/app/shared/list-expansion-panel/list-expansion-panel.component';
import { DoctorsService } from './doctors.service';
import { IDoctor } from './model/doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit, OnDestroy {
  private doctors$!: Observable<IDoctor[]>;
  private destroySubject$: Subject<boolean> = new Subject<boolean>();

  public isLoading!: boolean;
  public items$!: Observable<IItem[]>;

  constructor(private doctorsService: DoctorsService, private router: Router) {
    this.doctorsService
      .loading()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((next) => {
        this.isLoading = next;
      });
    this.doctors$ = this.doctors$ = this.doctorsService.getDoctors();
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }

  ngOnInit(): void {
    this.items$ = this.doctors$.pipe(
      map((doctors) => this.mapperToItems(doctors))
    );
  }

  // prettier-ignore
  public mapperToItems(doctors: IDoctor[]){
    const list = doctors.map((item) => ({
      id: item.id,
      title: item.nome,
      description: `${item.especialidade} | ${item.crm}`,
      content: [item.email]
    })) as IItem[];

    return list;
  }

  public onEditButtonClicked(idDoctor: number): void {
    this.router.navigate(['/doctors/', idDoctor]);
  }

  public onDeactivateButtonClicked(idDoctor: number): void {
    console.log(idDoctor);
  }
}
