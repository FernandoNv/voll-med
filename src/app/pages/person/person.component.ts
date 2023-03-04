import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IPerson } from './model/person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnDestroy {
  private destroySubject$: Subject<boolean> = new Subject<boolean>();

  public person$!: Observable<IPerson>;
  public isLoading!: boolean;

  constructor(private personService: PersonService) {
    this.person$ = this.personService.getPersonInformations();
    this.personService
      .loading()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((loading) => (this.isLoading = loading));
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }
}
