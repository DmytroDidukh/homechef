import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';

import { api } from 'api';
import { normalize } from 'utils/normalize';

import type { AppState, SubcategoriesById, CategoriesById, UniqueId } from 'typescript/types';
import {
    CategoriesStateInterface,
    CategoryInterface,
    SubcategoryInterface,
} from 'typescript/interfaces';

export const initialState: CategoriesStateInterface = {
    categories: {
        ids: [],
        byId: {},
    },
    subcategories: {
        ids: [],
        byId: {},
    },
    error: null,
    loading: false,
};

const addCategory = createAsyncThunk<
    CategoryInterface,
    CategoryInterface
    // @ts-ignore
>('categories/addCategory', async (data) => {
    try {
        const docId = await api.categories.addCategory(data);

        return {
            ...data,
            id: docId,
        };
    } catch (e) {
        console.error(e);
        return 'addCategory ERROR';
    }
});

const addSubcategory = createAsyncThunk<
    SubcategoryInterface,
    SubcategoryInterface
    // @ts-ignore
>('categories/addSubcategory', async (data) => {
    try {
        const docId = await api.categories.addSubcategory(data);

        return {
            ...data,
            id: docId,
        };
    } catch (e) {
        console.error(e);
        return 'addSubcategory ERROR';
    }
});

const getCategories = createAsyncThunk<
    CategoryInterface[]
    // @ts-ignore
>('categories/getCategories', async () => {
    try {
        const data = await api.categories.getCategories();

        return data;
    } catch (e) {
        console.error(e);
        return 'getCategories ERROR';
    }
});

const getSubcategories = createAsyncThunk<
    SubcategoryInterface[]
    // @ts-ignore
>('categories/getSubcategories', async () => {
    try {
        const data = await api.categories.getSubcategories();

        return data;
    } catch (e) {
        console.error(e);
        return 'getSubcategories ERROR';
    }
});

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addCategory.fulfilled, (state, action) => {
                const { id } = action.payload;

                state.categories.ids = [...state.categories.ids, id];
                state.categories.byId[id] = action.payload;
            })
            .addCase(addCategory.rejected, (state, action) => {
                // @ts-ignore
                state.error = action.payload;
            })
            .addCase(addSubcategory.fulfilled, (state, action) => {
                const { id } = action.payload;

                state.subcategories.ids = [...state.subcategories.ids, id];
                state.subcategories.byId[id] = action.payload;
            })
            .addCase(addSubcategory.rejected, (state, action) => {
                // @ts-ignore
                state.error = action.payload;
            })
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                const { entries, ids } = normalize(action.payload, 'id');

                state.categories.ids = ids;
                state.categories.byId = entries;

                state.loading = false;
            })
            .addCase(getSubcategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSubcategories.fulfilled, (state, action) => {
                const { entries, ids } = normalize(action.payload, 'id');

                state.subcategories.ids = ids;
                state.subcategories.byId = entries;

                state.loading = false;
            });
    },
});

/**
 * Categories
 */
export const selectCategoriesIds = (state: AppState): UniqueId[] => state.categories.categories.ids;
export const selectCategories = (state: AppState): CategoriesById =>
    state.categories.categories.byId;
export const selectCategoriesList = createSelector(
    [selectCategoriesIds, selectCategories],
    (ids, data) => {
        if (ids && data) {
            return ids.map((id) => data[id]);
        }

        return [];
    },
);

/**
 * Subcategories
 */
export const selectSubcategoriesIds = (state: AppState): UniqueId[] =>
    state.categories.subcategories.ids;
export const selectSubcategories = (state: AppState): SubcategoriesById =>
    state.categories.subcategories.byId;

export const categoriesReducer = categoriesSlice.reducer;
export const categoriesActions = {
    ...categoriesSlice.actions,
    addCategory,
    addSubcategory,
    getCategories,
    getSubcategories,
};
