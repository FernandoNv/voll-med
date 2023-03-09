import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry, shareReplay, Subject } from 'rxjs';
import { IPageable } from 'src/app/shared/models/pageable';
import { PhonePipe } from 'src/app/shared/pipes/phone.pipe';
import { environment } from 'src/environments/environment';
import { INewPatient, IPatient, IUpdatePatient } from './model/patient';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  private baseUrl = `${API}/api/v1/pacientes`;
  private loadingSubject$: Subject<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient, private phonePipe: PhonePipe) {}

  public loading(): Observable<boolean> {
    return this.loadingSubject$.asObservable();
  }

  public getPatients(): Observable<IPatient[]> {
    this.loadingSubject$.next(true);
    const observable = this.httpClient.get<IPageable>(this.baseUrl).pipe(
      retry(3),
      map((next) => next.content as IPatient[]),
      shareReplay()
    );

    observable.subscribe(() => this.loadingSubject$.next(false));

    return observable;
  }

  public newPatient(newPatient: INewPatient): Observable<IPatient> {
    return this.httpClient.post<IPatient>(this.baseUrl, newPatient);
  }

  public updateById(updateValues: IUpdatePatient) {
    return this.httpClient.put<IPatient>(this.baseUrl, updateValues);
  }

  public getPatientById(idPatient: number): Observable<IPatient> {
    const url = `${this.baseUrl}/${idPatient}`;
    return this.httpClient.get<IPatient>(url);
  }

  public deactivateAccountById(idPatient: number): Observable<void> {
    const url = `${this.baseUrl}/${idPatient}`;
    return this.httpClient.delete<void>(url);
  }

  public formatTextModal(patient: IPatient): string[] {
    const arrText = [
      this.phonePipe.transform(patient.telefone ?? ''),
      patient.cpf,
    ];

    return arrText;
  }

  public exist(value: string, type: 'email' | 'cpf') {
    const url = `${this.baseUrl}/existe?tipo=${type}&${type}=${value}`;
    return this.httpClient.get<boolean>(url);
  }
}
