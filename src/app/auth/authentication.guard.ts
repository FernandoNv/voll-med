import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivateChild {
  constructor(private userService: UserService, private router: Router) {}
  // canMatch(
  //   route: Route,
  //   segments: UrlSegment[]
  // ):
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree>
  //   | boolean
  //   | UrlTree {
  //   console.log(this.userService.isSignedIn());
  //   if (this.userService.isSignedIn()) {
  //     return true;
  //   }
  //   return this.router.navigate(['sign-in']);
  // }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // console.log(childRoute, state);
    if (this.userService.isSignedIn()) {
      return true;
    }
    return this.router.navigate(['sign-in']);
  }
}
