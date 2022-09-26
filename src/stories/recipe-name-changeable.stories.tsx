import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TranslationProvider } from 'containers/translation/translation.provider';
import { RecipeNameChangeable } from 'components/recipe-name-changeable/recipe-name-changeable.component';

import { RECIPE_CREATOR_ERROR_MESSAGE_KEYS } from 'constants/errors';
import { TRANSLATION_MESSAGES } from 'translations/messages';

import { LANGUAGE_ENUM, RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM } from 'typescript/enums';

export default {
    title: 'Components/RecipeNameChangeable',
    component: RecipeNameChangeable,
    argTypes: {},
    decorators: [
        (Story) => (
            <TranslationProvider
                locale={LANGUAGE_ENUM.ENGLISH}
                setLocale={() => {}}
                defaultLocale={LANGUAGE_ENUM.ENGLISH}
                messages={TRANSLATION_MESSAGES}
            >
                <Story />
            </TranslationProvider>
        ),
    ],
} as ComponentMeta<typeof RecipeNameChangeable>;

const Template: ComponentStory<typeof RecipeNameChangeable> = (args) => (
    <RecipeNameChangeable {...args} valueSaveHandler={() => {}} />
);

export const Default = Template.bind({});
Default.args = {
    initValue: '',
    placeholderValue: 'name',
    error: {
        status: false,
    },
};

export const WithError: any = Template.bind({});
WithError.args = {
    initValue: 'SALAD DRESSING THREE WAYS: PIQUANT, HOT AND FRAGRANT',
    placeholderValue: 'name',
    error: {
        status: true,
        messageKey: RECIPE_CREATOR_ERROR_MESSAGE_KEYS[RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM.NAME],
    },
};
