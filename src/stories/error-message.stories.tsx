import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ErrorMessage } from 'components/error-message/error-message.component';

import { TRANSLATION_KEYS } from 'translations/keys';

export default {
    title: 'Components/ErrorMessage',
    component: ErrorMessage,
    argTypes: {},
    decorators: [
        (Story) => (
            <div style={{ position: 'relative' }}>
                <div style={{ fontSize: '40px' }}> Anchor</div>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ErrorMessage>;

export const Default: ComponentStory<typeof ErrorMessage> = () => (
    <ErrorMessage messageKey={TRANSLATION_KEYS.ERRORS.RECIPE_CREATOR.INVALID_NAME} />
);
