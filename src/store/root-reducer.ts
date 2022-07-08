import { combineReducers, Action, Reducer } from '@reduxjs/toolkit';

import { authSlice, authReducer, resetAuth, initialState as authInitialState } from './slices/auth';
import { AppState } from './store';

const reducer: Reducer<AppState> = combineReducers({
    [authSlice.name]: authReducer,
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
