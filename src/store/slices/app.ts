import { createSlice } from '@reduxjs/toolkit';

import type { AppState } from 'typescript/types';
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
    // extraReducers: (builder) => {
    //     builder.addCase(authActions.getUser.fulfilled, (state, action) => {
    //         state.adminMode = action.payload.admin;
    //     });
    // },
});

export const selectAdminMode = (state: AppState): boolean | undefined => state.app.adminMode;

export const { setAdminMode } = appSlice.actions;

export const appReducer = appSlice.reducer;
export const appActions = {
    ...appSlice.actions,
};
