import { RECIPE_CREATOR_ERROR_MESSAGE } from 'constants/errors';
import { FILE_CONFIG } from 'constants/app';

import { RECIPE_DATA_PROPERTY_ENUM } from 'typescript/enums';
import { RecipeDataInterface } from 'typescript/interfaces';
import type { RecipeDataErrorsType, ValidationRegExpType } from 'typescript/types';

interface ValidationConfigInterface {
    RECIPE: ValidationRegExpType;
}

const VALIDATION_CONFIG: ValidationConfigInterface = {
    RECIPE: {
        [RECIPE_DATA_PROPERTY_ENUM.NAME_UK]: /^[\w\d\s-,]{2,200}$/gi,
    },
};

interface ValidationServiceInterface {
    validateRecipeData(
        data: RecipeDataInterface,
        propertiesToValidate: RECIPE_DATA_PROPERTY_ENUM[],
    ): RecipeDataErrorsType;
    validateImage(file: File): boolean;
}

class ValidationService implements ValidationServiceInterface {
    validateRecipeData(
        data: RecipeDataInterface,
        propertiesToValidate: RECIPE_DATA_PROPERTY_ENUM[],
    ) {
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

    validateImage(file: File) {
        const { type, size } = file;

        const isValidType = this.validateImageType(type, FILE_CONFIG.IMAGE.ACCEPT);
        const isValidSize = this.validateImageSize(size, FILE_CONFIG.IMAGE.MAX_SIZE);

        return isValidType && isValidSize;
    }

    private validateImageType(fileType: string, acceptableType: string[]) {
        return acceptableType.some((type) => fileType === type);
    }

    private validateImageSize(fileSize: number, maxSize: number) {
        return fileSize <= maxSize;
    }
}

export const validationService = new ValidationService();
