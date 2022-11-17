import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '@app/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { environment } from '@src/environments/environment';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import * as fromActions from './user.actions';
import { UserResponse } from './user.models';

type Action = fromActions.All;

@Injectable()
export class UserEffects {

  constructor(
              private httpClient:HttpClient,
              private actions: Actions,
              private notification: NotificationService,
              private router: Router
              ) { }


              public signUpEmail: Observable<Action> = createEffect(() =>
                this.actions.pipe(
                  ofType(fromActions.Types.SIGN_UP),
                  map((action: fromActions.SignUp) => action.user),
                  switchMap(userData =>
                     this.httpClient.post<UserResponse>(`${environment.url}account/register/`, userData)
                  .pipe(
                    tap((response: UserResponse) => {
                      localStorage.setItem('token', response.token);
                      this.router.navigate(['/']);
                    }),
                    map((response: UserResponse) => new fromActions.SignUpSuccess(response.email, response || null)),
                    catchError(error => {
                      this.notification.error("Error al registar un nuevo usuario");
                      return of(new fromActions.SignUpError(error.message));
                    }))
                    )));
}
