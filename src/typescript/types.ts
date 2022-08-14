import { Action, ThunkAction } from '@reduxjs/toolkit';
import { User } from '@firebase/auth';

import { store } from 'store/store';
import {
    CategoryInterface,
    CustomErrorInterface,
    IngredientGroupInterface,
    IngredientInterface,
    RecipeInterface,
    SubcategoryInterface,
} from './interfaces';
import { RECIPE_PROPERTY_ENUM } from './enums';

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

export type CategoriesById = Record<CategoryInterface['id'], CategoryInterface>;
export type SubcategoriesById = Record<SubcategoryInterface['id'], SubcategoryInterface>;
export type RecipesById = Record<RecipeInterface['id'], RecipeInterface>;
export type IngredientsById = Record<IngredientInterface['id'], IngredientInterface>;
export type IngredientsGroupsById = Record<
    IngredientGroupInterface['id'],
    IngredientGroupInterface
>;
export type RecipeDataErrors = Record<RECIPE_PROPERTY_ENUM, CustomErrorInterface>;
