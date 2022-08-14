import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RecipeNameChangeable } from 'components/recipe-name-changeable/recipe-name-changeable.component';

import { RECIPE_CREATOR_ERROR_MESSAGE } from 'constants/errors';

import { RECIPE_PROPERTY_ENUM } from 'typescript/enums';

export default {
    title: 'Components/RecipeNameChangeable',
    component: RecipeNameChangeable,
    argTypes: {},
} as ComponentMeta<typeof RecipeNameChangeable>;

const Template: ComponentStory<typeof RecipeNameChangeable> = (args) => (
    <RecipeNameChangeable {...args} valueSaveHandler={() => {}} />
);

export const Default = Template.bind({});
Default.args = {
    initValue: '',
    error: {
        status: false,
    },
};

export const WithError: any = Template.bind({});
WithError.args = {
    initValue: 'SALAD DRESSING THREE WAYS: PIQUANT, HOT AND FRAGRANT',
    error: {
        status: true,
        message: RECIPE_CREATOR_ERROR_MESSAGE[RECIPE_PROPERTY_ENUM.NAME_UK],
    },
};
