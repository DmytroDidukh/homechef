import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Skeleton } from 'components/skeleton/skeleton.component';

import { SKELETON_VARIANT_ENUM } from 'typescript/enums';

export default {
    title: 'Components/Skeleton',
    component: Skeleton,
    argTypes: {},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Rect = Template.bind({});
Rect.args = {
    variant: SKELETON_VARIANT_ENUM.RECT,
    width: 400,
    height: 500,
};

export const Circle: any = Template.bind({});
Circle.args = {
    variant: SKELETON_VARIANT_ENUM.CIRCLE,
    width: 100,
    height: 100,
};

export const Text: any = Template.bind({});
Text.args = {
    variant: SKELETON_VARIANT_ENUM.TEXT,
};
