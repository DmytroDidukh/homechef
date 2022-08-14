import { RECIPE_CREATOR_ERROR_MESSAGE } from 'constants/errors';

import { RECIPE_PROPERTY_ENUM } from 'typescript/enums';
import { RecipeDataInterface } from 'typescript/interfaces';
import type { RecipeDataErrors } from 'typescript/types';

const VALIDATION_CONFIG = {
    RECIPE: {
        [RECIPE_PROPERTY_ENUM.NAME_UK]: /^[\w\d\s-,]{2,200}$/gi,
    },
};

export class ValidationService {
    validateRecipeData(data: RecipeDataInterface): RecipeDataErrors {
        const errors: {} = {};

        Object.entries(data).forEach(([key, value]) => {
            // @ts-ignore
            const isValid = VALIDATION_CONFIG.RECIPE[key].test(value);

            if (!isValid) {
                // @ts-ignore
                errors[key] = {
                    status: true,
                    // @ts-ignore
                    message: RECIPE_CREATOR_ERROR_MESSAGE[key],
                };
            } else {
                // @ts-ignore
                errors[key] = {
                    status: false,
                };
            }
        });

        return <RecipeDataErrors>errors;
    }
}
