import { RECIPE_DATA_PROPERTY_ENUM } from 'typescript/enums';
import { DefaultObjectValueStingType, RecipeDataErrorsType } from 'typescript/types';

export const INITIAL_RECIPE_ERRORS_STATE: RecipeDataErrorsType = {
    errors: {},
    errorsFound: false,
};

export const RECIPE_CREATOR_ERROR_MESSAGE: DefaultObjectValueStingType = {
    [RECIPE_DATA_PROPERTY_ENUM.NAME_UK]: 'Поле є обов’язковим для заповнення.',
};
