import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { api } from 'api';
import { normalize } from 'utils/normalize';

import type {
    AppDispatch,
    AppState,
    IngredientsById,
    IngredientsGroupsById,
    UniqueId,
} from 'typescript/types';
import {
    IngredientsStateInterface,
    IngredientInterface,
    IngredientGroupInterface,
} from 'typescript/interfaces';

export const initialState: IngredientsStateInterface = {
    ingredients: {
        ids: [],
        byId: {},
    },
    groups: {
        ids: [],
        byId: {},
    },
    error: null,
};

const addIngredient = createAsyncThunk<
    // Return type of the payload creator
    IngredientInterface,
    // First argument to the payload creator
    IngredientInterface,
    {
        // Optional fields for defining thunkApi field types
        dispatch: AppDispatch;
        state: AppState;
    }
    // @ts-ignore
>('ingredients/addIngredient', async (data) => {
    try {
        const docId = await api.ingredients.add(data);

        return {
            ...data,
            id: docId,
        };
    } catch (e) {
        console.error(e);
        return 'addIngredient ERROR';
    }
});

const getIngredientsGroups = createAsyncThunk<
    IngredientGroupInterface[]
    // @ts-ignore
>('ingredients/getIngredientsGroups', async () => {
    try {
        const data = await api.ingredients.getGroups();

        return data;
    } catch (e) {
        console.error(e);
        return 'getIngredientsGroups ERROR';
    }
});

const getIngredients = createAsyncThunk<
    IngredientInterface[]
    // @ts-ignore
>('ingredients/getIngredients', async () => {
    try {
        const data = await api.ingredients.getIngredients();

        return data;
    } catch (e) {
        console.error(e);
        return 'getIngredients ERROR';
    }
});

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addIngredient.fulfilled, (state, action) => {
                const { id } = action.payload;

                state.ingredients.ids = [...state.ingredients.ids, id];
                state.ingredients.byId[id] = action.payload;
            })
            .addCase(addIngredient.rejected, (state, action) => {
                // @ts-ignore
                state.error = action.payload;
            })
            .addCase(getIngredientsGroups.fulfilled, (state, action) => {
                const { entries, ids } = normalize(action.payload, 'id');

                state.groups.ids = ids;
                state.groups.byId = entries;
            })
            .addCase(getIngredients.fulfilled, (state, action) => {
                const { entries, ids } = normalize(action.payload, 'id');

                state.ingredients.ids = ids;
                state.ingredients.byId = entries;
            });
    },
});

export const selectIngredientsIds = (state: AppState): UniqueId[] =>
    state.ingredients.ingredients.ids;
export const selectIngredients = (state: AppState): IngredientsById =>
    state.ingredients.ingredients.byId;
export const selectIngredientsGroupsIds = (state: AppState): UniqueId[] =>
    state.ingredients.groups.ids;
export const selectIngredientsGroups = (state: AppState): IngredientsGroupsById =>
    state.ingredients.groups.byId;

export const ingredientsReducer = ingredientsSlice.reducer;
export const ingredientsActions = {
    ...ingredientsSlice.actions,
    addIngredient,
    getIngredientsGroups,
    getIngredients,
};
