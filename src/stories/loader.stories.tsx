import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Loader } from 'components/loader/loader.component';

import { LOADER_STYLE_ENUM, LOADER_SIZE_ENUM } from 'typescript/enums/common';

export default {
    title: 'Components/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    style: LOADER_STYLE_ENUM.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    style: LOADER_STYLE_ENUM.SECONDARY,
};

export const Dark = Template.bind({});
Dark.args = {
    style: LOADER_STYLE_ENUM.DARK,
};

export const Light = Template.bind({});
Light.args = { style: LOADER_STYLE_ENUM.LIGHT };
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
    size: LOADER_SIZE_ENUM.SMALL,
};

export const Medium = Template.bind({});
Medium.args = {
    size: LOADER_SIZE_ENUM.MEDIUM,
};

export const Large = Template.bind({});
Large.args = {
    size: LOADER_SIZE_ENUM.LARGE,
};
