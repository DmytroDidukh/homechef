import { generateId } from 'utils/string';

import { LANGUAGE_ENUM, RECIPE_STATUS_ENUM } from 'typescript/enums';
import {
    RecipeDataInterface,
    RecipeDataTranslationsInterface,
    RecipeInterface,
    RecipeMetaInterface,
} from 'typescript/interfaces';
import type { UniqueId } from 'typescript/types';

export interface RecipeServiceInterface {
    createWithData(recipe: RecipeInterface): void;
    addDataProperty(property: keyof RecipeDataInterface, value: any): void;
    addTranslatedDataProperty(
        property: keyof RecipeDataTranslationsInterface,
        value: any,
        language: LANGUAGE_ENUM,
    ): void;
    deleteDataProperty(property: keyof RecipeDataInterface): void;
    deleteTranslatedDataProperty(
        property: keyof RecipeDataTranslationsInterface,
        language: LANGUAGE_ENUM,
    ): void;
}

export class Recipe implements RecipeServiceInterface {
    id: UniqueId = generateId();
    data: RecipeDataInterface = {
        id: this.id,
        translations: {
            [LANGUAGE_ENUM.UKRAINIAN]: {},
            [LANGUAGE_ENUM.ENGLISH]: {},
        },
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

    addTranslatedDataProperty(
        property: keyof RecipeDataTranslationsInterface,
        value: any,
        language: LANGUAGE_ENUM,
    ) {
        if (this.data.translations) {
            this.data.translations[language][property] = value;
        }
    }

    deleteDataProperty(property: keyof RecipeDataInterface) {
        delete this.data[property];
    }

    deleteTranslatedDataProperty(
        property: keyof RecipeDataTranslationsInterface,
        language: LANGUAGE_ENUM,
    ) {
        if (this.data.translations) {
            delete this.data.translations[language][property];
        }
    }
}
