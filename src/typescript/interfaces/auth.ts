import { APP_REQUEST_STATUS_ENUM } from '../enums/app';
import { CurrentUserType } from '../types/auth';

export interface LoginInterface {
    authenticated: boolean | undefined;
    status: APP_REQUEST_STATUS_ENUM;
    error: null | string;
    loading: boolean | undefined;
}

export interface UserInterface {
    id: string | undefined;
    data: CurrentUserType | null;
}

export interface AuthStateInterface {
    login: LoginInterface;
    user: UserInterface;
}
