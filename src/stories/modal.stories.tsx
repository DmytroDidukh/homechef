import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import useState from 'storybook-addon-state';

import { Modal as ModalBase } from 'components/modal/modal.component';
import { Button } from 'components/button/button.component';

import { SIGN_IN_ENUM } from 'typescript/enums/app';

export default {
    title: 'Components/Modal',
    component: ModalBase,
} as ComponentMeta<typeof ModalBase>;

const Template: ComponentStory<typeof ModalBase> = (args) => {
    const [open, setOpen] = useState('open', false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClick = (type: string) => {
        if (type === SIGN_IN_ENUM.GOOGLE) {
            console.log('SINGING IN GOOGLE...');
        }

        if (type === SIGN_IN_ENUM.FACEBOOK) {
            console.log('SINGING IN FACEBOOK...');
        }

        handleClose();
    };

    return (
        <div>
            <Button label="Open" onClick={handleOpen} />

            {open && (
                <ModalBase {...args} onClose={handleClose}>
                    <Button
                        label="Google sign in"
                        onClick={() => handleClick(SIGN_IN_ENUM.GOOGLE)}
                    />
                </ModalBase>
            )}
        </div>
    );
};

export const Modal = Template.bind({});
Modal.args = {
    closeOnOutsideClick: true,
};
