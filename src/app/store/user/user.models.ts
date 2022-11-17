import { IUser } from '@app/models/back/user/iuser';

export { IUser as UserResponse } from '@app/models/back/user/iuser'

export interface EmailPasswordCredentials {
  email: string;
  password: string;
}

export interface UserRequest extends IUser {
  password: string;
}

export type UserCreateRequest = Omit<UserRequest, 'token'>;
