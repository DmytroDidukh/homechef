import { Action, ThunkAction } from '@reduxjs/toolkit';
import { User } from '@firebase/auth';

import { store } from 'store/store';

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

export type FirebaseUser = User;

export type NoteType = {
    id: string;
    text: string;
};

export type CurrentUserType = {
    id: string;
    email: string | null;
    emailVerified: boolean;
    displayName: string | null;
    photoURL: string | null;
    admin?: boolean;
    recipes: string[];
    favorites: string[];
    bookmarks: string[];
    notes: NoteType[];
};

export type IngredientType = {
    id: string;
    name: string;
    name_uk: string;
    name_scientific: string | null;
    description: string | null;
    description_uk: string | null;
    wikipedia_id: string | null;
    group_id: string;
    image_url: string | null;
};

export type IngredientGroupType = {
    id: string;
    name: string;
    name_uk: string;
};

export type IngredientsType = {
    [ket: string]: IngredientType;
};

export type IngredientsGroupsType = {
    [ket: string]: IngredientGroupType;
};

export type CategoryType = {
    id: string;
    name: string;
    name_uk: string;
    subcategories: string[];
};

export type CategoriesType = {
    [ket: string]: CategoryType;
};

export type SubcategoryType = {
    id: string;
    name: string;
    name_uk: string;
    category: string;
};

export type SubcategoriesType = {
    [ket: string]: SubcategoryType;
};
