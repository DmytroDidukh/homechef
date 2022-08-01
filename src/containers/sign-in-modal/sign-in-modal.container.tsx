import React, { useState } from 'react';

import { Button } from 'components/button/button.component';
import { Modal } from 'components/modal/modal.component';

import FacebookIcon from 'icons/facebook.svg';
import GoogleIcon from 'icons/google.svg';

import { useActions } from 'store/hooks';

import type { CurrentUserType } from 'typescript/types/auth';

import styles from './sign-in-modal.module.scss';

import { BUTTON_STYLE_ENUM, COMPONENTS_SIZE_ENUM } from 'typescript/enums/common';

interface SignInModalProps {
    user?: CurrentUserType;
}

export const SignInModal: React.FC<SignInModalProps> = (): JSX.Element => {
    const { signInWithGoogle, signInWithFacebook } = useActions();

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <Button
                label="ВХІД"
                style={BUTTON_STYLE_ENUM.PRIMARY_REVERSED}
                onClick={() => setModalOpen(true)}
            />

            {modalOpen && (
                <Modal
                    closeOnOutsideClick
                    className={styles.modal}
                    onClose={() => setModalOpen(false)}
                >
                    <h5 className={styles.title}>УВІЙТИ ЗА ДОПОМОГОЮ</h5>
                    <Button
                        className={styles.button}
                        size={COMPONENTS_SIZE_ENUM.LARGE}
                        style={BUTTON_STYLE_ENUM.TRANSPARENT}
                        border={false}
                        onClick={() => signInWithGoogle()}
                    >
                        <img src={GoogleIcon} alt="Google" />
                        <>GOOGLE</>
                    </Button>
                    <Button
                        className={styles.button}
                        size={COMPONENTS_SIZE_ENUM.LARGE}
                        style={BUTTON_STYLE_ENUM.TRANSPARENT}
                        border={false}
                        onClick={() => signInWithFacebook()}
                    >
                        <img src={FacebookIcon} alt="Facebook" />
                        <>FACEBOOK</>
                    </Button>
                </Modal>
            )}
        </div>
    );
};
