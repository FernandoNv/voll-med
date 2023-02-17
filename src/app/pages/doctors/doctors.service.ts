import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, retry, shareReplay, Subject } from 'rxjs';
import { IPageable } from 'src/app/shared/model/pageable';
import { environment } from 'src/environments/environment';
import { IDoctor } from './model/doctor';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  private baseUrl = `${API}/api/v1/medicos`;
  private loadingSubject$: Subject<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient) {}

  getDoctors(): Observable<IDoctor[]> {
    this.loadingSubject$.next(true);
    const observable = this.httpClient.get<IPageable>(this.baseUrl).pipe(
      retry(3),
      map((next) => next.content as IDoctor[]),
      delay(500),
      shareReplay()
    );

    observable.subscribe(() => this.loadingSubject$.next(false));

    return observable;
  }

  public loading(): Observable<boolean> {
    return this.loadingSubject$.asObservable();
  }

  getDoctorById(id: number): Observable<IDoctor> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<IDoctor>(url);
  }
}
