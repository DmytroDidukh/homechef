import { APP_REQUEST_STATUS_ENUM } from '../enums/app';
import type {
    CurrentUserType,
    IngredientsType,
    IngredientsGroupsType,
    CategoriesType,
    SubcategoriesType,
} from '../types';

export interface AppStateInterface {
    adminMode: boolean | undefined;
}

export interface LoginInterface {
    authenticated: boolean | undefined;
    status: APP_REQUEST_STATUS_ENUM;
}

export interface UserInterface {
    id: string | undefined;
    data: CurrentUserType | null;
}

export interface AuthStateInterface {
    login: LoginInterface;
    user: UserInterface;
    error: null | string;
    loading: boolean | undefined;
}

export interface IngredientsStateInterface {
    ingredients: {
        ids: string[] | [];
        byId: IngredientsType;
    };
    groups: {
        ids: string[] | [];
        byId: IngredientsGroupsType;
    };
    error: string | null;
}

export interface CategoriesStateInterface {
    categories: {
        ids: string[];
        byId: CategoriesType;
    };
    subcategories: {
        ids: string[];
        byId: SubcategoriesType;
    };
    error: string | null;
    loading: boolean;
}
