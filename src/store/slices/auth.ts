import { createSlice, createAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from '../store';

// Define a type for the slice state
interface AuthState {
    value: number;
}

// Define the initial state using that type
export const initialState: AuthState = {
    value: 0,
};

export const resetState = createAction('reset');

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: AppState) => state.counter.value;

export const authReducer = authSlice.reducer;
export const authActions = {
    ...authSlice.actions,
    resetState,
};
