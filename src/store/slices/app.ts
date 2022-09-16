import { createSlice } from '@reduxjs/toolkit';

import type { AppState } from 'typescript/types';
import { AppStateInterface } from 'typescript/interfaces';
import { LANGUAGE_ENUM } from 'typescript/enums';

export const initialState: AppStateInterface = {
    adminMode: undefined,
    language: LANGUAGE_ENUM.UKRAINIAN,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAdminMode: (state, action) => {
            state.adminMode = action.payload;
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
