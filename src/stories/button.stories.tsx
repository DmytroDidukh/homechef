import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from 'components/button/button.component';

import { BUTTON_STYLE_ENUM, COMPONENTS_SIZE_ENUM } from 'typescript/enums/common';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    style: BUTTON_STYLE_ENUM.PRIMARY,
    label: 'Button',
};

export const PrimaryReversed: any = Template.bind({});
PrimaryReversed.args = {
    label: 'Button',
    style: BUTTON_STYLE_ENUM.PRIMARY_REVERSED,
};

export const PrimaryLight: any = Template.bind({});
PrimaryLight.args = {
    label: 'Button',
    style: BUTTON_STYLE_ENUM.PRIMARY_LIGHT,
};

export const PrimaryDark: any = Template.bind({});
PrimaryDark.args = {
    label: 'Button',
    style: BUTTON_STYLE_ENUM.PRIMARY_DARK,
};

export const Light: any = Template.bind({});
Light.args = {
    label: 'Button',
    style: BUTTON_STYLE_ENUM.LIGHT,
};

export const Dark: any = Template.bind({});
Dark.args = {
    label: 'Button',
    style: BUTTON_STYLE_ENUM.DARK,
};

export const Transparent: any = Template.bind({});
Transparent.args = {
    label: 'X',
    style: BUTTON_STYLE_ENUM.TRANSPARENT,
    border: false,
};

export const Large: any = Template.bind({});
Large.args = {
    size: COMPONENTS_SIZE_ENUM.LARGE,
    label: 'Button',
};

export const Small: any = Template.bind({});
Small.args = {
    size: COMPONENTS_SIZE_ENUM.SMALL,
    label: 'Button',
};
