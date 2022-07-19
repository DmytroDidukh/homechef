import { IngredientType } from '../types/ingredients';

export interface IngredientsStateInterface {
    ids: string[] | [];
    byId: {
        [key: string]: {
            data: IngredientType;
        };
    };
    error: string | null;
}
