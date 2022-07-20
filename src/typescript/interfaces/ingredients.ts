import type { IngredientsType, IngredientsGroupsType } from '../types/ingredients';

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
