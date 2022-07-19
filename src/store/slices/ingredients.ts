import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { api } from 'api';

import type { AppState, AppDispatch } from 'typescript/types/app';
import type { IngredientType } from 'typescript/types/ingredients';
import { IngredientsStateInterface } from 'typescript/interfaces/ingredients';

export const initialState: IngredientsStateInterface = {
    ids: [],
    byId: {},
    error: null,
};

const addIngredient = createAsyncThunk<
    // Return type of the payload creator
    IngredientType | string,
    // First argument to the payload creator
    IngredientType,
    {
        // Optional fields for defining thunkApi field types
        dispatch: AppDispatch;
        state: AppState;
    }
    // @ts-ignore
>('ingredients/addIngredient', async (data) => {
    try {
        const response = await api.ingredients.add(data);

        return response;
    } catch (e) {
        console.log(e);
    }
});

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addIngredient.fulfilled, (state, action) => {
                const { id } = action.payload.id;
                state.ids = [...state.ids, id];
                state.byId = {
                    ...state.byId,
                    [id]: {
                        data: action.payload,
                    },
                };
            })
            .addCase(addIngredient.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const selectIngredientsIds = (state: AppState): string[] | [] => state.ids;
export const selectIngredients = (state: AppState): boolean => state.byId;

export const ingredientsReducer = ingredientsSlice.reducer;
export const ingredientsActions = {
    ...ingredientsSlice.actions,
    addIngredient,
};
