import { FILE_CONFIG } from 'constants/app';
import { convertBytesToMegabytes } from 'helpers';
import { TRANSLATION_KEYS } from './keys';

import { LANGUAGE_ENUM } from 'typescript/enums';

export const TRANSLATION_MESSAGES = {
    [LANGUAGE_ENUM.UKRAINIAN]: {
        [TRANSLATION_KEYS.UPLOAD_IMAGE.UPLOAD]: 'Завантажте зображення',
        [TRANSLATION_KEYS.RECIPE_CREATOR.NEW]: 'Ваш новий рецепт',
        [TRANSLATION_KEYS.RECIPE_CREATOR.SUGGEST]: 'Запропонувати рецепт',
        [TRANSLATION_KEYS.RECIPE_CREATOR.RECIPE_NAME]: 'Назва рецепту',
        [TRANSLATION_KEYS.COMMON.SAVE]: 'Зберегти',
        [TRANSLATION_KEYS.HEADER.ADD_RECIPE]: 'Додати рецепт',
        [TRANSLATION_KEYS.NAV.RECIPES]: 'Рецепти',
        [TRANSLATION_KEYS.NAV.FAVORITES]: 'Улюблені',
        [TRANSLATION_KEYS.NAV.SAVED]: 'Збережені',
        [TRANSLATION_KEYS.PROFILE_MENU.PROFILE]: 'Профіль',
        [TRANSLATION_KEYS.PROFILE_MENU.FAVORITES]: 'Обрані рецепти',
        [TRANSLATION_KEYS.PROFILE_MENU.SHOPPING_LIST]: 'Список покупок',
        [TRANSLATION_KEYS.PROFILE_MENU.SIGN_OUT]: 'Вийти',
        [TRANSLATION_KEYS.SIGN_IN_MODAL.TITLE]: 'Увійти за допомогою',
        [TRANSLATION_KEYS.ERRORS.RECIPE_CREATOR.INVALID_NAME]:
            'Може складатись з літер, цифр та [- , ; :]',
        [TRANSLATION_KEYS.ERRORS.RECIPE_CREATOR.EMPTY_NAME]:
            "Назва рецепту є обов'язковою для заповнення",
        [TRANSLATION_KEYS.ERRORS.RECIPE_CREATOR.EMPTY_IMAGE]: 'Додайте зображення',
        [TRANSLATION_KEYS.ERRORS.RECIPE_CREATOR
            .INVALID_IMAGE]: `Максимальний розмір зображення ${convertBytesToMegabytes(
            FILE_CONFIG.IMAGE.MAX_SIZE,
        )} MB. Можливі формати: ${FILE_CONFIG.IMAGE.ACCEPT.join(', ')}`,
    },
    [LANGUAGE_ENUM.ENGLISH]: {
        [TRANSLATION_KEYS.UPLOAD_IMAGE.UPLOAD]: 'Upload image',
        [TRANSLATION_KEYS.RECIPE_CREATOR.NEW]: 'Your new recipe',
        [TRANSLATION_KEYS.RECIPE_CREATOR.SUGGEST]: 'Suggest recipe',
        [TRANSLATION_KEYS.RECIPE_CREATOR.RECIPE_NAME]: 'Recipe title',
        [TRANSLATION_KEYS.COMMON.SAVE]: 'Save',
        [TRANSLATION_KEYS.HEADER.ADD_RECIPE]: 'Add recipe',
        [TRANSLATION_KEYS.NAV.RECIPES]: 'Recipes',
        [TRANSLATION_KEYS.NAV.FAVORITES]: 'Favorites',
        [TRANSLATION_KEYS.NAV.SAVED]: 'Saved',
        [TRANSLATION_KEYS.PROFILE_MENU.PROFILE]: 'Profile',
        [TRANSLATION_KEYS.PROFILE_MENU.FAVORITES]: 'Favorites',
        [TRANSLATION_KEYS.PROFILE_MENU.SHOPPING_LIST]: 'Shopping list',
        [TRANSLATION_KEYS.PROFILE_MENU.SIGN_OUT]: 'Sign out',
        [TRANSLATION_KEYS.SIGN_IN_MODAL.TITLE]: 'Sign in with',
        [TRANSLATION_KEYS.ERRORS.RECIPE_CREATOR.INVALID_NAME]:
            'Can consist of letters, numbers and [- , ; :]',
        [TRANSLATION_KEYS.ERRORS.RECIPE_CREATOR.EMPTY_NAME]: 'Recipe name is required',
        [TRANSLATION_KEYS.ERRORS.RECIPE_CREATOR.EMPTY_IMAGE]: 'Image is required',
        [TRANSLATION_KEYS.ERRORS.RECIPE_CREATOR
            .INVALID_IMAGE]: `Max image size ${convertBytesToMegabytes(
            FILE_CONFIG.IMAGE.MAX_SIZE,
        )} MB. Supported formats: ${FILE_CONFIG.IMAGE.ACCEPT.join(', ')}`,
    },
};
