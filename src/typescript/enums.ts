/**
 * App
 */
export enum APP_REQUEST_STATUS_ENUM {
    IDLE = 'IDLE',
    PENDING = 'PENDING',
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS',
}

export enum SIGN_IN_ENUM {
    GOOGLE = 'google',
    FACEBOOK = 'facebook',
}

export enum RECIPE_STATUS_ENUM {
    DRAFT = 'draft',
    PUBLISHED = 'published',
    BLOCKED = 'blocked',
}

/**
 * Common
 */
export enum COMPONENTS_SIZE_ENUM {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export enum LOADER_STYLE_ENUM {
    PRIMARY = 'primary',
    PRIMARY_LIGHT = 'primary-light',
    PRIMARY_DARK = 'primary-dark',
    LIGHT = 'light',
    DARK = 'dark',
}

export enum BUTTON_STYLE_ENUM {
    PRIMARY = 'primary',
    PRIMARY_REVERSED = 'primary-reversed',
    PRIMARY_LIGHT = 'primary-light',
    PRIMARY_DARK = 'primary-dark',
    LIGHT = 'light',
    DARK = 'dark',
    TRANSPARENT = 'transparent',
}
