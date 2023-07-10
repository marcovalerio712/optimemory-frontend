import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginActivate{
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (!sessionStorage.getItem('loggedStudent')) {
      this.router.navigate(['login']);
    }
    return true;
  }
}