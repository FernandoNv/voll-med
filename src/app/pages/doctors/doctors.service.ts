import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, retry, shareReplay, Subject } from 'rxjs';
import { IPageable } from 'src/app/shared/models/pageable';
import { environment } from 'src/environments/environment';
import { IDoctor, INewDoctor, IUpdateDoctor } from './model/doctor';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  private baseUrl = `${API}/api/v1/medicos`;
  private loadingSubject$: Subject<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient) {}

  public getDoctors(): Observable<IDoctor[]> {
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

  public newDoctor(doctor: INewDoctor): Observable<IDoctor> {
    return this.httpClient.post<IDoctor>(this.baseUrl, doctor);
  }

  public getDoctorById(id: number): Observable<IDoctor> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<IDoctor>(url);
  }

  public updateById(updateValues: IUpdateDoctor) {
    return this.httpClient.put<IDoctor>(this.baseUrl, updateValues);
  }

  public deactivateAccountById(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<void>(url);
  }

  public formatTextModal(doctor: IDoctor): string[] {
    const arrText = [
      `${
        doctor.especialidade.charAt(0) +
        doctor.especialidade.toLowerCase().slice(1)
      } | CRM ${doctor.crm}`,
    ];

    return arrText;
  }
}
