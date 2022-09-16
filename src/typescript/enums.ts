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

export enum LANGUAGE_ENUM {
    UKRAINIAN = 'UK',
    ENGLISH = 'EN',
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

export enum SKELETON_VARIANT_ENUM {
    RECT = 'rect',
    CIRCLE = 'circle',
    TEXT = 'text',
}

export enum SKELETON_JUSTIFY_CONTENT_ENUM {
    START = 'flex-start',
    END = 'flex-end',
    CENTER = 'center',
    BETWEEN = 'space-between',
    EVENLY = 'space-evenly',
    AROUND = 'space-around',
}

export enum SKELETON_ALIGN_ITEMS_ENUM {
    START = 'flex-start',
    END = 'flex-end',
    CENTER = 'center',
}

/**
 * Recipe
 */
export enum RECIPE_DATA_PROPERTY_ENUM {
    NAME = 'name',
    NAME_UK = 'name_uk',
    DESCRIPTION = 'description',
    DESCRIPTION_UK = 'description_uk',
    SLUG = 'slug',
    CATEGORY = 'category',
    SUBCATEGORY = 'subcategory',
    TAGS = 'tags',
    STEPS = 'steps',
    IMAGE_URL = 'imageURL',
    VIDEO_URL = 'videoURL',
    ORIGIN_URL = 'originURL',
    COOKING_TIME = 'cookingTime',
    PREPARATION_TIME = 'preparationTime',
    COMPLEXITY = 'complexity',
    AUTHOR = 'author',
    CREATED_AT = 'createdAt',
}
