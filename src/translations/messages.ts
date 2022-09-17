import { LANGUAGE_ENUM } from 'typescript/enums';

import { TRANSLATION_KEYS } from './keys';

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
    },
};
