import { createSlice } from '@reduxjs/toolkit';

import { authActions } from './auth';

import type { AppState } from 'typescript/types/app';
import { AppStateInterface } from 'typescript/interfaces/app';

export const initialState: AppStateInterface = {
    adminMode: undefined,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAdminMode: (state, action) => {
            state.adminMode = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authActions.signInWithGoogle.fulfilled, (state, action) => {
                state.adminMode = action.payload.id === process.env.REACT_APP_ADMIN_UID;
            })
            .addCase(authActions.signInWithFacebook.fulfilled, (state, action) => {
                state.adminMode = action.payload.id === process.env.REACT_APP_ADMIN_UID;
            });
    },
});

export const selectAdminMode = (state: AppState): boolean | undefined => state.app.adminMode;

export const appReducer = appSlice.reducer;
export const appActions = {
    ...appSlice.actions,
};
