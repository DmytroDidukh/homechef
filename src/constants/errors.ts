import { TRANSLATION_KEYS } from 'translations/keys';

import { RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM } from 'typescript/enums';
import { DefaultObjectValueStingType } from 'typescript/types';
import { RecipeDataErrorsInterface } from 'typescript/interfaces';

export const INITIAL_RECIPE_ERRORS_STATE: RecipeDataErrorsInterface = {
    errors: {},
    errorsFound: false,
};

export const RECIPE_CREATOR_ERROR_MESSAGE_KEYS: DefaultObjectValueStingType = {
    [RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM.NAME]:
        TRANSLATION_KEYS.ERRORS.RECIPE_CREATOR.INVALID_NAME,
};
