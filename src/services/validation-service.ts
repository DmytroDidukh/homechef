import { INITIAL_RECIPE_ERRORS_STATE, RECIPE_CREATOR_ERROR_MESSAGE_KEYS } from 'constants/errors';
import { FILE_CONFIG } from 'constants/app';

import {
    LANGUAGE_ENUM,
    RECIPE_DATA_PROPERTY_ENUM,
    RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM,
} from 'typescript/enums';
import {
    RecipeDataInterface,
    RecipeDataValidationConfigInterface,
    RecipeDataErrorsInterface,
} from 'typescript/interfaces';
import type { ValidationRegExpType } from 'typescript/types';

interface ValidationConfigInterface {
    RECIPE: ValidationRegExpType;
}

const VALIDATION_CONFIG: ValidationConfigInterface = {
    RECIPE: {
        [RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM.NAME]: /^[\w\d\s-,]{2,200}$/gi,
    },
};

interface ValidationServiceInterface {
    validateRecipeData(
        data: RecipeDataInterface,
        language: LANGUAGE_ENUM,
        config: RecipeDataValidationConfigInterface,
    ): RecipeDataErrorsInterface;
    validateImage(file: File): boolean;
}

class ValidationService implements ValidationServiceInterface {
    validateRecipeData(
        data: RecipeDataInterface,
        language: LANGUAGE_ENUM,
        config: RecipeDataValidationConfigInterface,
    ) {
        let errors = INITIAL_RECIPE_ERRORS_STATE;

        config.propertiesToValidate.forEach((propertyName) => {
            const isValid = VALIDATION_CONFIG.RECIPE[propertyName].test(
                <string>data[propertyName] || '',
            );

            const result = this.setErrors(isValid, propertyName);
            errors = {
                ...result,
            };
        });

        config.translatedPropertiesToValidate.forEach((propertyName) => {
            if (data.translations) {
                const isValid = VALIDATION_CONFIG.RECIPE[propertyName].test(
                    <string>data.translations[language][propertyName] || '',
                );

                const result = this.setErrors(isValid, propertyName);
                errors = {
                    ...errors,
                    ...result,
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

    private setErrors(
        isValid: boolean,
        propertyName: RECIPE_DATA_PROPERTY_ENUM | RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM,
    ): RecipeDataErrorsInterface {
        const result = INITIAL_RECIPE_ERRORS_STATE;

        if (!isValid) {
            result.errors[propertyName] = {
                status: true,
                messageKey: RECIPE_CREATOR_ERROR_MESSAGE_KEYS[propertyName],
            };
            result.errorsFound = true;
        } else {
            result.errors[propertyName] = {
                status: false,
            };
        }
        return result;
    }
}

export const validationService = new ValidationService();
