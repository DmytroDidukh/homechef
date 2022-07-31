import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Spinner } from 'components/spinner/spinner.component';

import { SPINNER_STYLE_ENUM, SPINNER_SIZE_ENUM } from 'typescript/enums/common';

export default {
    title: 'Components/Spinner',
    component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    style: SPINNER_STYLE_ENUM.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    style: SPINNER_STYLE_ENUM.SECONDARY,
};

export const Dark = Template.bind({});
Dark.args = {
    style: SPINNER_STYLE_ENUM.DARK,
};

export const Light = Template.bind({});
Light.args = { style: SPINNER_STYLE_ENUM.LIGHT };
Light.decorators = [
    (Story) => (
        <div
            style={{
                backgroundColor: '#000',
                padding: '10px',
                position: 'relative',
                width: 100,
                height: 100,
            }}
        >
            <Story />
        </div>
    ),
];

export const Small = Template.bind({});
Small.args = {
    size: SPINNER_SIZE_ENUM.SMALL,
};

export const Medium = Template.bind({});
Medium.args = {
    size: SPINNER_SIZE_ENUM.MEDIUM,
};

export const Large = Template.bind({});
Large.args = {
    size: SPINNER_SIZE_ENUM.LARGE,
};
