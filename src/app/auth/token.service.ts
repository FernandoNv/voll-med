import { Injectable } from '@angular/core';

const KEY = 'token';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  public getToken(): string {
    return localStorage.getItem(KEY) ?? '';
  }

  public setToken(token: string): void {
    localStorage.setItem(KEY, token);
  }

  public removeToken() {
    localStorage.removeItem(KEY);
  }

  public hasToken() {
    return !!localStorage.getItem(KEY);
  }
}
