import { combineReducers, Action, Reducer } from '@reduxjs/toolkit';

import {
    authSlice,
    authReducer,
    resetState,
    initialState as authInitialState,
} from './slices/auth';
import { AppState } from './store';

const reducer: Reducer<AppState> = combineReducers({
    [authSlice.name]: authReducer,
});

export const rootReducer: any = (state: AppState, action: Action) => {
    if (action.type === resetState.type) {
        return reducer(
            { auth: { login: state.auth.login, user: authInitialState.value } },
            { type: undefined },
        );
    }

    return reducer(state, action);
};
