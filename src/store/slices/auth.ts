import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { APP_REQUEST_STATUS_ENUM } from 'typescript/enums/app';
import { UserDtoType } from 'typescript/types/auth';
import type { AppState, AppDispatch } from '../store';
import { api, db } from '../../api';
import { collection, getDocs } from 'firebase/firestore';

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

const signInWithGoogle = createAsyncThunk<
    // Return type of the payload creator
    UserDtoType,
    // First argument to the payload creator
    undefined,
    {
        // Optional fields for defining thunkApi field types
        dispatch: AppDispatch;
        state: AppState;
    }
    // @ts-ignore
>('auth/signInWithGoogle', async (_, thunkApi) => {
    console.log(thunkApi);
    const user = await api.auth.googleSignIn();

    return user;
});

const getData = createAsyncThunk<
    void,
    undefined,
    {
        // Optional fields for defining thunkApi field types
        dispatch: AppDispatch;
        state: AppState;
    }
    // @ts-ignore
>('auth/getData', async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
    });
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuth: (state) => {
            state.login.authenticated = false;
            state.user.data = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
            state.user.data = action.payload;
        });
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
    signInWithGoogle,
    getData,
};
