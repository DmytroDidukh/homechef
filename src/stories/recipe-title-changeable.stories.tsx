import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RecipeTitleChangeable } from 'components/recipe-title-changeable/recipe-title-changeable.component';

import { RECIPE_CREATOR_ERROR_MESSAGE } from 'constants/errors';

export default {
    title: 'Components/RecipeTitleChangeable',
    component: RecipeTitleChangeable,
    argTypes: {},
} as ComponentMeta<typeof RecipeTitleChangeable>;

const Template: ComponentStory<typeof RecipeTitleChangeable> = (args) => (
    <RecipeTitleChangeable {...args} savingHandler={() => {}} />
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
        message: RECIPE_CREATOR_ERROR_MESSAGE.TITLE,
    },
};
