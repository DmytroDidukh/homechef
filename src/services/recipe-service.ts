import { generateId } from 'utils/string';

import { RECIPE_STATUS_ENUM } from 'typescript/enums';
import { RecipeDataInterface, RecipeInterface, RecipeMetaInterface } from 'typescript/interfaces';
import type { UniqueId } from 'typescript/types';

export interface RecipeServiceInterface {
    createWithData(recipe: RecipeInterface): void;
    addDataProperty(property: keyof RecipeDataInterface, value: any): void;
    deleteDataProperty(property: keyof RecipeDataInterface): void;
}

export class Recipe implements RecipeServiceInterface {
    id: UniqueId = generateId();
    data: RecipeDataInterface = {
        id: this.id,
    };
    meta: RecipeMetaInterface = {
        id: this.id,
        status: RECIPE_STATUS_ENUM.DRAFT,
    };

    createWithData(recipe: RecipeInterface) {
        this.id = recipe.id;
        this.data = recipe.data;
        this.meta = recipe.meta;
    }

    addDataProperty(property: keyof RecipeDataInterface, value: any) {
        this.data[property] = value;
    }

    deleteDataProperty(property: keyof RecipeDataInterface) {
        delete this.data[property];
    }
}
