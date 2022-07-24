import { combineReducers, Action, Reducer } from '@reduxjs/toolkit';

import { authSlice, authReducer, resetAuth, initialState as authInitialState } from './slices/auth';
import { ingredientsSlice, ingredientsReducer } from './slices/ingredients';
import { appSlice, appReducer } from './slices/app';

import type { AppState } from 'typescript/types/app';

const reducer: Reducer<AppState> = combineReducers({
    [authSlice.name]: authReducer,
    [appSlice.name]: appReducer,
    [ingredientsSlice.name]: ingredientsReducer,
});

export const rootReducer: any = (state: AppState, action: Action) => {
    if (action.type === resetAuth.type) {
        return reducer(
            { auth: { login: state.auth.login, user: authInitialState.user } },
            { type: undefined },
        );
    }

    return reducer(state, action);
};
