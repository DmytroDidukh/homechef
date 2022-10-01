import { INITIAL_RECIPE_ERRORS_STATE } from 'constants/errors';
import { FILE_CONFIG } from 'constants/app';
import { TRANSLATION_KEYS } from 'translations/keys';
import { isNotEmptyString, testStringByRegExp } from 'utils/string';

import {
    LANGUAGE_ENUM,
    RECIPE_DATA_PROPERTY_ENUM,
    RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM,
} from 'typescript/enums';
import { RecipeDataInterface, RecipeDataValidationConfigInterface } from 'typescript/interfaces';

interface RecipeValidation {
    [key: string]: RegExp;
}

interface ValidationConfigInterface {
    RECIPE: RecipeValidation;
}

const VALIDATION_CONFIG: ValidationConfigInterface = {
    RECIPE: {
        [RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM.NAME]: /^[\w\d\s-,;:]{2,200}$/,
        [RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM.DESCRIPTION]: /^[\w\d\s-,;:!?]{2,1000}$/,
    },
};

interface ValidationServiceInterface {
    validateRecipeData(
        data: RecipeDataInterface,
        language: LANGUAGE_ENUM,
        config: RecipeDataValidationConfigInterface,
    ): this;

    validateImage(file: File): boolean;
}

class ValidationService implements ValidationServiceInterface {
    errors = INITIAL_RECIPE_ERRORS_STATE;

    validateRecipeData(
        data: RecipeDataInterface,
        language: LANGUAGE_ENUM,
        config: RecipeDataValidationConfigInterface,
    ) {
        this.errors = INITIAL_RECIPE_ERRORS_STATE;

        // data.translations ALWAYS true
        if (config.saving && data.translations) {
            console.log(data.translations);
            this.validateRecipeName(data.translations[language].name)
                .validateRecipeDescription(data.translations[language].description)
                .validateRecipeImageURL(data.imageURL);
        }

        if (config.suggesting) {
            console.log('SUGGESTING...');
        }

        return this;
    }

    validateRecipeName(value?: string) {
        let isError = false;
        let messageKey = '';

        if (!isNotEmptyString(value)) {
            isError = true;
            messageKey = TRANSLATION_KEYS.ERRORS.RECIPE_CREATOR.EMPTY_NAME;
        } else if (
            !testStringByRegExp(
                value || '',
                VALIDATION_CONFIG.RECIPE[RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM.NAME],
            )
        ) {
            console.log(value);
            isError = true;
            messageKey = TRANSLATION_KEYS.ERRORS.RECIPE_CREATOR.INVALID_NAME;
        }

        this.setErrors(isError, messageKey, RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM.NAME);

        return this;
    }

    validateRecipeDescription(value?: string) {
        if (value !== undefined) {
            let isError = false;
            let messageKey = '';

            if (!isNotEmptyString(value)) {
                isError = true;
                messageKey = TRANSLATION_KEYS.ERRORS.RECIPE_CREATOR.EMPTY_NAME;
            } else if (
                !testStringByRegExp(
                    value,
                    VALIDATION_CONFIG.RECIPE[RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM.DESCRIPTION],
                )
            ) {
                isError = true;
                messageKey = TRANSLATION_KEYS.ERRORS.RECIPE_CREATOR.INVALID_NAME;
            }

            this.setErrors(isError, messageKey, RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM.DESCRIPTION);
        }

        return this;
    }

    validateRecipeImageURL(value?: string) {
        this.setErrors(
            !value,
            TRANSLATION_KEYS.ERRORS.RECIPE_CREATOR.EMPTY_IMAGE,
            RECIPE_DATA_PROPERTY_ENUM.IMAGE_URL,
        );

        return this;
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
        isError: boolean,
        messageKey: string,
        propertyName: RECIPE_DATA_PROPERTY_ENUM | RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM,
    ): void {
        if (isError) {
            this.errors.errors[propertyName] = {
                status: true,
                messageKey: messageKey,
            };
            this.errors.errorsFound = true;
        } else {
            this.errors.errors[propertyName] = {
                status: false,
            };
            // this.errors.errorsFound = false;
        }
    }
}

export const validationService = new ValidationService();
