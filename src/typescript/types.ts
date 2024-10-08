import { Action, ThunkAction } from '@reduxjs/toolkit';
import { User } from '@firebase/auth';

import { store } from 'store/store';
import {
    CategoryInterface,
    CategoryTranslationsInterface,
    IngredientGroupInterface,
    IngredientInterface,
    RecipeInterface,
    RecipeDataTranslationsInterface,
    SubcategoryInterface,
    SubcategoryTranslationsInterface,
} from './interfaces';
import { LANGUAGE_ENUM } from './enums';

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

export type FirebaseUser = User;
export type UniqueId = string;

export type CategoryTranslations = Record<LANGUAGE_ENUM, CategoryTranslationsInterface>;
export type SubcategoryTranslations = Record<LANGUAGE_ENUM, SubcategoryTranslationsInterface>;
export type RecipeDataTranslations = Record<LANGUAGE_ENUM, RecipeDataTranslationsInterface>;
export type CategoriesById = Record<CategoryInterface['id'], CategoryInterface>;
export type SubcategoriesById = Record<SubcategoryInterface['id'], SubcategoryInterface>;
export type RecipesById = Record<RecipeInterface['id'], RecipeInterface>;
export type IngredientsById = Record<IngredientInterface['id'], IngredientInterface>;
export type IngredientsGroupsById = Record<
    IngredientGroupInterface['id'],
    IngredientGroupInterface
>;

export type ValidationRegExpType = {
    [key: string]: RegExp;
};

export type DefaultObjectValueStingType = {
    [key: string]: string;
};
