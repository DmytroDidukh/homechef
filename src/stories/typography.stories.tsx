import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from 'components/typography/typography.component';

import { TYPOGRAPHY_STYLE_ENUM, TYPOGRAPHY_VARIANT_ENUM } from 'typescript/enums';

interface TypographyListInterface {
    children: React.ReactNode;
}

const TypographyList: React.FC<TypographyListInterface> = ({ children }) => <div>{children}</div>;

export default {
    title: 'Components/Typography',
    component: Typography,
    // subcomponents: { Typography },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => {
    console.log(args);
    return <Typography {...args} value="Typography" />;
};

export const Heading1 = Template.bind({});
Heading1.args = {
    variant: TYPOGRAPHY_VARIANT_ENUM.HEADING_1,
    style: TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL,
};

export const Heading2 = Template.bind({});
Heading2.args = {
    variant: TYPOGRAPHY_VARIANT_ENUM.HEADING_2,
    style: TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL,
};

export const Heading3 = Template.bind({});
Heading3.args = {
    variant: TYPOGRAPHY_VARIANT_ENUM.HEADING_3,
    style: TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL,
};

export const Heading4 = Template.bind({});
Heading4.args = {
    variant: TYPOGRAPHY_VARIANT_ENUM.HEADING_4,
    style: TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL,
};

export const Heading5 = Template.bind({});
Heading5.args = {
    variant: TYPOGRAPHY_VARIANT_ENUM.HEADING_5,
    style: TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL,
};

export const Heading6 = Template.bind({});
Heading6.args = {
    variant: TYPOGRAPHY_VARIANT_ENUM.HEADING_6,
    style: TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL,
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
    variant: TYPOGRAPHY_VARIANT_ENUM.SUBTITLE_1,
    style: TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL,
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
    variant: TYPOGRAPHY_VARIANT_ENUM.SUBTITLE_2,
    style: TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL,
};

export const Paragraph1 = Template.bind({});
Paragraph1.args = {
    variant: TYPOGRAPHY_VARIANT_ENUM.PARAGRAPH_1,
    style: TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL,
};

export const Paragraph2 = Template.bind({});
Paragraph2.args = {
    variant: TYPOGRAPHY_VARIANT_ENUM.PARAGRAPH_2,
    style: TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL,
};

export const Text = Template.bind({});
Text.args = {
    variant: TYPOGRAPHY_VARIANT_ENUM.TEXT,
};

export const Button = Template.bind({});
Button.args = {
    variant: TYPOGRAPHY_VARIANT_ENUM.BUTTON,
};

export const List: ComponentStory<typeof TypographyList> = (args) => (
    <TypographyList {...args}>
        {/* @ts-ignore */}
        <Heading1 {...Heading1.args} />
        {/* @ts-ignore */}
        <Heading2 {...Heading2.args} />
        {/* @ts-ignore */}
        <Heading3 {...Heading3.args} />
        {/* @ts-ignore */}
        <Heading4 {...Heading4.args} />
        {/* @ts-ignore */}
        <Heading5 {...Heading5.args} />
        {/* @ts-ignore */}
        <Heading6 {...Heading6.args} />
        {/* @ts-ignore */}
        <Subtitle1 {...Subtitle1.args} />
        {/* @ts-ignore */}
        <Subtitle2 {...Subtitle2.args} />
        {/* @ts-ignore */}
        <Paragraph1 {...Paragraph1.args} />
        {/* @ts-ignore */}
        <Paragraph2 {...Paragraph2.args} />
        {/* @ts-ignore */}
        <Text {...Text.args} />
        {/* @ts-ignore */}
        <Button {...Button.args} />
    </TypographyList>
);
