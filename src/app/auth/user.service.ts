import { Injectable } from '@angular/core';
import { IUser, IUserSignIn } from './model/user.model';
import { TokenService } from './token.service';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userBehaviorSubject$: BehaviorSubject<IUser> =
    new BehaviorSubject<IUser>({} as IUser);

  constructor(private tokenService: TokenService) {
    if (tokenService.hasToken()) {
      this.decodeToken();
    }
  }

  private decodeToken(token?: string) {
    if (!token) {
      token = this.tokenService.getToken() ?? '';
    }
    try {
      const jwtDecoded = jwtDecode(token) as any;
      // console.log(jwtDecoded);
      console.log(new Date(jwtDecoded.exp * 1000));
      if (Date.now() > jwtDecoded.exp * 1000) {
        console.log('Token expirado');
        this.signOut();
        return;
      }
      const user: IUser = {
        username: jwtDecoded?.sub,
      };

      this.userBehaviorSubject$.next(user);
    } catch (error) {
      console.log('Problema no token');
      this.signOut();
      console.log(error);
    }
  }

  public saveToken(token: string): void {
    this.tokenService.setToken(token);
    this.decodeToken();
  }

  public signOut(): void {
    this.tokenService.removeToken();
    this.userBehaviorSubject$.next({} as IUser);
  }

  public isSignedIn(): boolean {
    return this.tokenService.hasToken();
  }

  public getUser(): Observable<IUser> {
    return this.userBehaviorSubject$.asObservable();
  }
}
