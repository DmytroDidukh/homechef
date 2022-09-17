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
    TOGGLE = 'toggle',
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

export enum TYPOGRAPHY_VARIANT_ENUM {
    HEADING_1 = 'heading1',
    HEADING_2 = 'heading2',
    HEADING_3 = 'heading3',
    HEADING_4 = 'heading4',
    HEADING_5 = 'heading5',
    HEADING_6 = 'heading6',
    SUBTITLE_1 = 'subtitle1',
    SUBTITLE_2 = 'subtitle2',
    PARAGRAPH_1 = 'paragraph1',
    PARAGRAPH_2 = 'paragraph2',
    TEXT = 'text',
    BUTTON = 'button',
}

export enum TYPOGRAPHY_FONT_WEIGH_ENUM {
    LIGHT = 'light',
    REGULAR = 'regular',
    SEMI_BOLD = 'semiBold',
    BOLD = 'bold',
    EXTRA_BOLD = 'extraBold',
}

export enum TYPOGRAPHY_STYLE_ENUM {
    LOWER_CASE_ALL = 'lowerCaseAll',
    UPPER_CASE_ALL = 'upperCaseAll',
    LOWER_CASE_FIRST = 'lowerCaseFirst',
    UPPER_CASE_FIRST = 'upperCaseFirst',
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
