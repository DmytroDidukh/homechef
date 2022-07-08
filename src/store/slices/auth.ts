import { createSlice } from '@reduxjs/toolkit';

import { APP_REQUEST_STATUS_ENUM } from 'typescript/enums/app';
import { UserDtoType } from 'typescript/types/auth';
import type { AppState } from '../store';

interface LoginInterface {
    authenticated: boolean | undefined;
    status: APP_REQUEST_STATUS_ENUM;
    error: null | string;
}

interface UserInterface {
    id: string | undefined;
    data: UserDtoType | null;
}

interface AuthState {
    login: LoginInterface;
    user: UserInterface;
}

export const initialState: AuthState = {
    login: {
        authenticated: undefined,
        status: APP_REQUEST_STATUS_ENUM.IDLE,
        error: null,
    },
    user: {
        id: undefined,
        data: null,
    },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuth: (state) => {
            state.login.authenticated = false;
            state.user.data = null;
        },
    },
});

export const { resetAuth } = authSlice.actions;

export const selectAuthLogin = (state: AppState) => state.auth.login;
export const selectAuthenticated = (state: AppState) => state.auth.login.authenticated;
export const selectUserData = (state: AppState) => state.auth.user.data;
export const selectUserId = (state: AppState) => state.auth.user.id;

export const authReducer = authSlice.reducer;
export const authActions = {
    ...authSlice.actions,
};
