import { createSlice } from '@reduxjs/toolkit';

import { getItemFromLocalStorage } from 'services/storage-service';
import { STORAGE_KEYS } from 'constants/app';

import type { AppState } from 'typescript/types';
import { AppStateInterface } from 'typescript/interfaces';
import { LANGUAGE_ENUM } from 'typescript/enums';

export const initialState: AppStateInterface = {
    adminMode: undefined,
    // @ts-ignore
    language: getItemFromLocalStorage(STORAGE_KEYS.LANGUAGE) || LANGUAGE_ENUM.UKRAINIAN,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAdminMode: (state, action) => {
            state.adminMode = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(authActions.getUser.fulfilled, (state, action) => {
    //         state.adminMode = action.payload.admin;
    //     });
    // },
});

export const selectAdminMode = (state: AppState): boolean | undefined => state.app.adminMode;
export const selectLanguage = (state: AppState): LANGUAGE_ENUM => state.app.language;

export const { setAdminMode } = appSlice.actions;

export const appReducer = appSlice.reducer;
export const appActions = {
    ...appSlice.actions,
};
