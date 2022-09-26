import { APP_REQUEST_STATUS_ENUM, RECIPE_COMPLEXITY_ENUM, RECIPE_STATUS_ENUM } from './enums';
import {
    UniqueId,
    SubcategoriesById,
    CategoriesById,
    IngredientsGroupsById,
    IngredientsById,
    CategoryTranslations,
    SubcategoryTranslations,
    RecipeDataTranslations,
} from './types';

/**
 * Common
 */
export interface SelectOption {
    value: string;
    label: string;
}

export interface CustomErrorInterface {
    status: boolean;
    message?: string;
}

/**
 * App
 */
export interface AppStateInterface {
    adminMode: boolean | undefined;
}

/**
 * Auth
 */
interface LoginStateInterface {
    authenticated: boolean | undefined;
    status: APP_REQUEST_STATUS_ENUM;
}

interface UserStateInterface {
    id: string | undefined;
    data: CurrentUserInterface | null;
}

export interface AuthStateInterface {
    login: LoginStateInterface;
    user: UserStateInterface;
    error: null | string;
    loading: boolean | undefined;
}

export type NoteInterface = {
    id: string;
    text: string;
};

export interface CurrentUserInterface {
    id: string;
    email: string | null;
    emailVerified: boolean;
    displayName: string | null;
    photoURL: string | null;
    admin?: boolean;
    recipes: UniqueId[];
    favorites: UniqueId[];
    bookmarks: UniqueId[];
    notes: NoteInterface[];
}

/**
 * Ingredients Interfaces
 */
export interface IngredientGroupInterface {
    id: string;
    name: string;
    name_uk: string;
}

export interface IngredientsStateInterface {
    ingredients: {
        ids: UniqueId[];
        byId: IngredientsById;
    };
    groups: {
        ids: UniqueId[];
        byId: IngredientsGroupsById;
    };
    error: string | null;
}

export interface IngredientInterface {
    id: UniqueId;
    name: string;
    name_uk: string;
    name_scientific: string | null;
    description: string | null;
    description_uk: string | null;
    wikipedia_id: string | null;
    group_id: UniqueId;
    image_url: string | null;
}

/**
 * Categories & Subcategories
 */
export interface CategoryTranslationsInterface {
    name: string;
}

export interface CategoryInterface {
    id: UniqueId;
    priority: number;
    translations: CategoryTranslations;
    subcategories?: SubcategoryInterface[];
}

export interface SubcategoryTranslationsInterface {
    name: string;
}

export interface SubcategoryInterface {
    id: UniqueId;
    translations: SubcategoryTranslations;
    categoryId: string;
}

export interface CategoriesStateInterface {
    categories: {
        ids: UniqueId[];
        byId: CategoriesById;
    };
    subcategories: {
        ids: UniqueId[];
        byId: SubcategoriesById;
    };
    error: string | null;
    loading: boolean;
}

/**
 * Recipe
 */
export interface RecipeStepsInterface {
    text: string;
    imageURL?: string;
}

export interface RecipeDataTranslationsInterface {
    name?: string;
    description?: string;
    steps?: RecipeStepsInterface[];
}

export interface RecipeDataInterface {
    id?: UniqueId;
    translations?: RecipeDataTranslations;
    slug?: string;
    category?: UniqueId;
    subcategory?: UniqueId;
    tags?: string[];
    imageURL?: string;
    videoURL?: string;
    originURL?: string;
    cookingTime?: string;
    preparationTime?: string;
    complexity?: RECIPE_COMPLEXITY_ENUM;
    author?: UniqueId;
    rating?: number;
    createdAt?: string;
}

export interface RecipeMetaInterface {
    id: UniqueId;
    status: RECIPE_STATUS_ENUM;
}

export interface RecipeInterface {
    id: UniqueId;
    data: RecipeDataInterface;
    meta: RecipeMetaInterface;
}

export interface FilesSaveOptionsInterface {
    main?: boolean;
    step?: number;
}

export interface RecipeDataChangeProps {
    property?: keyof RecipeDataInterface;
    translatedProperty?: keyof RecipeDataTranslationsInterface;
}

export interface StepFileInterface {
    step: number;
    file: File;
}
