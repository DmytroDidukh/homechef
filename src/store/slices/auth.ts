import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { api } from 'api';
import { currentUserFactory } from 'factory/user';

import type { AppState, AppDispatch } from 'typescript/types/app';
import type { CurrentUserType } from 'typescript/types/auth';
import type { AuthState, LoginInterface } from 'typescript/interfaces/auth';
import { APP_REQUEST_STATUS_ENUM } from 'typescript/enums/app';

export const initialState: AuthState = {
    login: {
        authenticated: undefined,
        status: APP_REQUEST_STATUS_ENUM.IDLE,
        error: null,
        loading: undefined,
    },
    user: {
        id: undefined,
        data: null,
    },
};

const signInWithGoogle = createAsyncThunk<
    // Return type of the payload creator
    CurrentUserType,
    // First argument to the payload creator
    undefined,
    {
        // Optional fields for defining thunkApi field types
        dispatch: AppDispatch;
        state: AppState;
    }
    // @ts-ignore
>('auth/signInWithGoogle', async () => {
    try {
        const response = await api.auth.googleSignIn();

        return currentUserFactory(response.user);
    } catch (e) {
        console.log(e);
    }
});

const signInWithFacebook = createAsyncThunk<
    // Return type of the payload creator
    CurrentUserType,
    // First argument to the payload creator
    undefined,
    {
        // Optional fields for defining thunkApi field types
        dispatch: AppDispatch;
        state: AppState;
    }
    // @ts-ignore
>('auth/signInWithFacebook', async () => {
    try {
        const response = await api.auth.facebookSignIn();

        return currentUserFactory(response.user);
    } catch (e) {
        console.log(e);
    }
});

const signOut = createAsyncThunk<
    // Return type of the payload creator
    CurrentUserType,
    // First argument to the payload creator
    undefined,
    {
        // Optional fields for defining thunkApi field types
        dispatch: AppDispatch;
        state: AppState;
    }
    // @ts-ignore
>('auth/signOut', async () => {
    try {
        await api.auth.signOut();
    } catch (e) {
        console.log(e);
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuth: (state) => {
            state.login.authenticated = false;
            state.user.data = null;
        },
        setAuthenticated: (state, action) => {
            state.login.authenticated = action.payload;
        },
        setCurrentUser: (state, action) => {
            state.login.authenticated = true;
            state.login.loading = false;

            state.user.data = action.payload;
            state.user.id = action.payload.id;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInWithGoogle.fulfilled, (state, action) => {
                state.user.data = action.payload;
                state.login.authenticated = true;
            })
            .addCase(signInWithFacebook.fulfilled, (state, action) => {
                state.user.data = action.payload;
                state.login.authenticated = true;
            })
            .addCase(signOut.fulfilled, (state) => {
                state.user.data = null;
                state.user.id = undefined;
                state.login.authenticated = false;
            });
    },
});

export const { resetAuth } = authSlice.actions;

export const selectAuth = (state: AppState): LoginInterface => state.auth.login;
export const selectAuthenticated = (state: AppState): boolean => state.auth.login.authenticated;
export const selectUserData = (state: AppState): CurrentUserType => state.auth.user.data;
export const selectUserId = (state: AppState): string => state.auth.user.id;

export const authReducer = authSlice.reducer;
export const authActions = {
    ...authSlice.actions,
    signInWithGoogle,
    signInWithFacebook,
    signOut,
};
