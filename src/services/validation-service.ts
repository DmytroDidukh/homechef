import { RECIPE_CREATOR_ERROR_MESSAGE } from 'constants/errors';

import { RECIPE_PROPERTY_ENUM } from 'typescript/enums';
import { RecipeDataInterface } from 'typescript/interfaces';
import type { RecipeDataErrorsType, ValidationRegExpType } from 'typescript/types';

interface ValidationConfigInterface {
    RECIPE: ValidationRegExpType;
}

const VALIDATION_CONFIG: ValidationConfigInterface = {
    RECIPE: {
        [RECIPE_PROPERTY_ENUM.NAME_UK]: /^[\w\d\s-,]{2,200}$/gi,
    },
};

interface ValidationServiceInterface {
    validateRecipeData(
        data: RecipeDataInterface,
        propertiesToValidate: RECIPE_PROPERTY_ENUM[],
    ): RecipeDataErrorsType;
}

class ValidationService implements ValidationServiceInterface {
    validateRecipeData(data: RecipeDataInterface, propertiesToValidate: RECIPE_PROPERTY_ENUM[]) {
        const errors: RecipeDataErrorsType = {};

        propertiesToValidate.forEach((propertyName) => {
            const isValid = VALIDATION_CONFIG.RECIPE[propertyName].test(
                <string>data[propertyName] || '',
            );

            if (!isValid) {
                errors[propertyName] = {
                    status: true,
                    message: RECIPE_CREATOR_ERROR_MESSAGE[propertyName],
                };
            } else {
                errors[propertyName] = {
                    status: false,
                };
            }
        });

        return errors;
    }
}

export const validationService = new ValidationService();
