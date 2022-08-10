import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { api } from 'api';
import { currentUserFactory } from 'factory/user';
import { setAdminMode } from './app';

import type { AppState, AppDispatch, FirebaseUser } from 'typescript/types';
import { AuthStateInterface, CurrentUserInterface } from 'typescript/interfaces';
import { APP_REQUEST_STATUS_ENUM } from 'typescript/enums';

export const initialState: AuthStateInterface = {
    login: {
        authenticated: undefined,
        status: APP_REQUEST_STATUS_ENUM.IDLE,
    },
    user: {
        id: undefined,
        data: null,
    },
    error: null,
    loading: undefined,
};

const saveUserToDatabase = createAsyncThunk<
    CurrentUserInterface,
    FirebaseUser,
    {
        dispatch: AppDispatch;
    }
    // @ts-ignore
>('auth/saveUserToDatabase', async (data, { dispatch }) => {
    try {
        const factoryUser = currentUserFactory(data);
        const user = await api.auth.getUser(factoryUser);
        console.log(user);
        if (user) {
            dispatch(setAdminMode(user.admin));

            return user;
        } else {
            await api.auth.addUser(factoryUser);

            return factoryUser;
        }
    } catch (e) {
        console.log(e);
        return 'SIGN UP ERROR';
    }
});

const signInWithGoogle = createAsyncThunk<
    // Return type of the payload creator
    CurrentUserInterface,
    // First argument to the payload creator
    void,
    {
        // Optional fields for defining thunkApi field types
        dispatch: AppDispatch;
        state: AppState;
    }
    // @ts-ignore
>('auth/signInWithGoogle', async (_, { dispatch }) => {
    try {
        const response = await api.auth.googleSignIn();
        dispatch(saveUserToDatabase(response.user));
        // return currentUserFactory(response.user);
    } catch (e) {
        console.log(e);
    }
});

const signInWithFacebook = createAsyncThunk<
    undefined,
    undefined,
    {
        dispatch: AppDispatch;
        state: AppState;
    }
    // @ts-ignore
>('auth/signInWithFacebook', async (_, { dispatch }) => {
    try {
        const response = await api.auth.facebookSignIn();
        dispatch(saveUserToDatabase(response.user));
        // return currentUserFactory(response.user);
    } catch (e) {
        console.log(e);
    }
});

const signOut = createAsyncThunk<
    CurrentUserInterface,
    undefined,
    {
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
            state.loading = false;

            state.user.data = action.payload;
            state.user.id = action.payload.id;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInWithGoogle.rejected, (state) => {
                state.error = 'ERROR';
            })
            .addCase(signInWithFacebook.rejected, (state) => {
                state.error = 'ERROR';
            })
            .addCase(signOut.fulfilled, (state) => {
                state.user.data = null;
                state.user.id = undefined;
                state.login.authenticated = false;
            })
            .addCase(saveUserToDatabase.pending, (state) => {
                state.loading = true;
            })
            .addCase(saveUserToDatabase.fulfilled, (state, action) => {
                state.user.data = action.payload;
                state.user.id = action.payload.id;

                state.login.authenticated = true;

                state.loading = false;
                state.error = null;
            })
            .addCase(saveUserToDatabase.rejected, (state, action) => {
                state.login.authenticated = false;
                state.loading = false;
                // @ts-ignore
                state.error = action.payload;
            });
    },
});

export const { resetAuth } = authSlice.actions;

export const selectAuthLoading = (state: AppState): boolean | undefined => state.auth.loading;
export const selectAuthError = (state: AppState): string | null => state.auth.err;
export const selectAuthenticated = (state: AppState): boolean => state.auth.login.authenticated;
export const selectUserData = (state: AppState): CurrentUserInterface => state.auth.user.data;
export const selectUserId = (state: AppState): string => state.auth.user.id;

export const authReducer = authSlice.reducer;
export const authActions = {
    ...authSlice.actions,
    signInWithGoogle,
    signInWithFacebook,
    signOut,
    saveUserToDatabase,
};
