import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  map,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { UserService } from 'src/app/auth/user.service';
import { environment } from 'src/environments/environment';
import { IPerson, IUpdatePerson } from './model/person';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private baseUrl = `${API}/api/v1/pessoas`;
  private loadingSubject$: Subject<boolean> = new Subject<boolean>();
  // prettier-ignore
  private personBehaviorSubject$: BehaviorSubject<IPerson> = new BehaviorSubject<IPerson>({} as IPerson);

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {
    this.userService
      .getUser()
      .pipe(
        filter((user) => user.username !== undefined),
        switchMap((user) => {
          const url = `${this.baseUrl}/${user.username}`;
          return httpClient.get<IPerson>(url);
        }),
        map((person) => this.formatPerson(person))
      )
      .subscribe((person) => {
        // console.log(person);
        this.personBehaviorSubject$.next(person);
      });
  }

  public loading(): Observable<boolean> {
    return this.loadingSubject$.asObservable();
  }

  public getPersonInformations(): Observable<IPerson> {
    return this.personBehaviorSubject$.asObservable();
  }

  public updatePerson(updateValues: IUpdatePerson): Observable<IPerson> {
    this.loadingSubject$.next(true);

    const observable = this.httpClient.put<IPerson>(this.baseUrl, updateValues);
    observable.subscribe((person) => {
      this.personBehaviorSubject$.next(person);
      this.loadingSubject$.next(false);
    });

    return observable;
  }

  private formatPerson(person: IPerson): IPerson {
    const newPerson = {
      ...person,
      dataNascimento: new Date(
        person.dataNascimento.toString().replaceAll('-', '/')
      ),
    };

    return newPerson;
  }
}
