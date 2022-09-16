import React, { useState } from 'react';

import { Button } from 'components/button/button.component';
import { Modal } from 'components/modal/modal.component';
import { Typography } from 'components/typography/typography.component';

import FacebookIcon from 'icons/facebook.svg';
import GoogleIcon from 'icons/google.svg';

import { useActions, useAppSelector } from 'store/hooks';
import { selectLanguage } from 'store/slices/app';
import { TRANSLATIONS } from 'constants/translations';

import { CurrentUserInterface } from 'typescript/interfaces';
import {
    BUTTON_STYLE_ENUM,
    COMPONENTS_SIZE_ENUM,
    TYPOGRAPHY_STYLE_ENUM,
    TYPOGRAPHY_VARIANT_ENUM,
} from 'typescript/enums';

import styles from './sign-in-modal.module.scss';

interface SignInModalProps {
    user?: CurrentUserInterface;
}

export const SignInModal: React.FC<SignInModalProps> = (): JSX.Element => {
    const { signInWithGoogle, signInWithFacebook } = useActions();

    const language = useAppSelector(selectLanguage);

    const [modalOpen, setModalOpen] = useState(false);

    const handleSignIn = (callback: () => void) => {
        callback();
        setModalOpen(false);
    };

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
                    <Typography
                        className={styles.title}
                        value={TRANSLATIONS[language].SIGN_IN_MODAL.TITLE}
                        variant={TYPOGRAPHY_VARIANT_ENUM.HEADING_6}
                        style={TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL}
                    />
                    <Button
                        className={styles.button}
                        size={COMPONENTS_SIZE_ENUM.LARGE}
                        style={BUTTON_STYLE_ENUM.TRANSPARENT}
                        border={false}
                        onClick={() => handleSignIn(signInWithGoogle)}
                    >
                        <img src={GoogleIcon} alt="Google" />
                        <>GOOGLE</>
                    </Button>
                    <Button
                        className={styles.button}
                        size={COMPONENTS_SIZE_ENUM.LARGE}
                        style={BUTTON_STYLE_ENUM.TRANSPARENT}
                        border={false}
                        onClick={() => handleSignIn(signInWithFacebook)}
                    >
                        <img src={FacebookIcon} alt="Facebook" />
                        <>FACEBOOK</>
                    </Button>
                </Modal>
            )}
        </div>
    );
};
