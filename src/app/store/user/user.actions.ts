import { Action } from '@ngrx/store' ;
import { EmailPasswordCredentials, UserCreateRequest, UserResponse } from './user.models';

export enum Types {
  INIT = '[User] Init: Start',
  INIT_AUTHORIZED = '[User] Init: Authorized',
  INIT_UNAUTHORIZED = '[User] Init: Unauthorized',
  INIT_ERROR = '[User] Init: Error',

  SIGN_UP = '[User] SignUp: Start',
  SIGN_UP_SUCCESS = '[User] SignUp: Success',
  SIGN_UP_ERROR = '[User] SignUp: Error',

  SIGN_IN = '[User] Login: Start',
  SIGN_IN_SUCCESS = '[User] Login: Success',
  SIGN_IN_ERROR = '[User] Login: Error',

  SIGN_OUT = '[User] Logout: Start',
  SIGN_OUT_SUCCESS = '[User] Logout: Success',
  SIGN_OUT_ERROR = '[User] Logout: Error',
}

//INIT -> User in session
export class Init implements Action {
  readonly type = Types.INIT;
  constructor() { }
}

export class InitAuthorized implements Action {
  readonly type = Types.INIT_AUTHORIZED;
  constructor(public email: string, public user: UserResponse | null) { }
}

export class InitUnauthorized implements Action {
  readonly type = Types.INIT_UNAUTHORIZED;
  constructor() { }
}

export class InitError implements Action {
  readonly type = Types.INIT_ERROR;
  constructor(public error:string) { }
}

export class SignIn implements Action {
  readonly type = Types.SIGN_IN;
  constructor(public credentials: EmailPasswordCredentials) { }
}

export class SignInSuccess implements Action {
  readonly type = Types.SIGN_IN_SUCCESS;
  constructor(public email: string, public user: UserResponse | null) { }
}

export class SignInError implements Action {
  readonly type = Types.SIGN_IN_ERROR;
  constructor(public error:string) { }
}

export class SignUp implements Action {
  readonly type = Types.SIGN_UP;
  constructor(public user: UserCreateRequest) { }
}

export class SignUpSuccess implements Action {
  readonly type = Types.SIGN_UP_SUCCESS;
  constructor(public email: string, public user: UserResponse | null) { }
}

export class SignUpError implements Action {
  readonly type = Types.SIGN_UP_ERROR;
  constructor(public error:string) { }
}

export class SignOut implements Action {
  readonly type = Types.SIGN_OUT;
  constructor() { }
}

export class SignOutSuccess implements Action {
  readonly type = Types.SIGN_OUT_SUCCESS;
  constructor() { }
}

export class SignOutError implements Action {
  readonly type = Types.SIGN_OUT_ERROR;
  constructor(public error:string) { }
}

export type All =
    Init |
    InitAuthorized |
    InitUnauthorized |
    InitError |
    SignIn |
    SignInSuccess |
    SignInError |
    SignUp |
    SignUpSuccess |
    SignUpError |
    SignOut |
    SignOutSuccess |
    SignOutError;


