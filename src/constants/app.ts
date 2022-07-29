export {};

const APP_NAME_UPPERCASE = 'HOMECHEF';

export const STORAGE_KEYS = {
    AUTH_GOOGLE: `${APP_NAME_UPPERCASE}_GOOGLE_AUTH_TOKEN`,
    AUTH_FACEBOOK: `${APP_NAME_UPPERCASE}_FACEBOOK_AUTH_TOKEN`,
    AUTHENTICATED_WITH: `${APP_NAME_UPPERCASE}_AUTHENTICATED_WITH`,
};

export const ROUTES = {
    HOME: '/',
    PROFILE: '/profile',
    SHOPPING_LIST: '/shopping-list',
    FAVORITES: '/favorites',
    NOT_FOUND: '/not-found',
    ERROR: '/error',
};

export const THEME = {
    PRIMARY: '#a4daf6',
    PRIMARY_LIGHT: '#eafaff',
    PRIMARY_DARK: '#429cb5',
};
