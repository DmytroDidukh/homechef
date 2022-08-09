const APP_NAME_UPPERCASE = 'HOMECHEF';

export const STORAGE_KEYS = {
    AUTH_GOOGLE: `${APP_NAME_UPPERCASE}_GOOGLE_AUTH_TOKEN`,
    AUTH_FACEBOOK: `${APP_NAME_UPPERCASE}_FACEBOOK_AUTH_TOKEN`,
    AUTHENTICATED_WITH: `${APP_NAME_UPPERCASE}_AUTHENTICATED_WITH`,
};

export const ROUTES = {
    HOME: '/',
    PROFILE: 'profile',
    SHOPPING_LIST: 'shopping-list',
    FAVORITES: 'favorites',
    BOOKMARKS: 'bookmarks',
    RECIPES: 'recipes',
    RECIPES_CATEGORY: ':categoryId',
    RECIPE_NEW: 'new',
    RECIPE_PREVIEW: 'preview/:recipeId',
    RECIPE_EDIT: 'edit/:recipeId',
    NOT_FOUND: 'not-found',
    ERROR: 'error',
};

export const THEME = {
    PRIMARY: '#3399C7',
    PRIMARY_LIGHT: '#80BFDC',
    PRIMARY_DARK: '#006694',
};

export const CLOUD_IMAGES = {
    LOADING_BARNY:
        'https://res.cloudinary.com/d-didukh/image/upload/v1659633095/homechef/fried-rice-cooking_rf5fd4.gif',
    USER_PLACEHOLDER:
        'https://res.cloudinary.com/d-didukh/image/upload/v1659278094/homechef/user_g7miac.png',
};
