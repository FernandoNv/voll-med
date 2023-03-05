import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserSignIn } from './model/user.model';
import { UserService } from './user.service';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  public authenticateUser(user: IUserSignIn): Observable<HttpResponse<any>> {
    const url = `${API}/user/login`;
    const body = {
      login: user.username,
      senha: user.password,
    };
    return this.httpClient
      .post<{ token: string }>(url, body, { observe: 'response' })
      .pipe(
        tap((response) => {
          const token = response.body?.token ?? '';
          this.userService.saveToken(token);
        })
      );
  }
}
