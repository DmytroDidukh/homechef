import type { IngredientsType, IngredientsGroupsType } from '../types';

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
