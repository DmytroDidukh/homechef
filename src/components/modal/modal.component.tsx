import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { Button } from 'components/button/button.component';

import { BUTTON_STYLE_ENUM, COMPONENTS_SIZE_ENUM } from 'typescript/enums';

import styles from './modal.module.scss';

const modalRoot = document.getElementById('root') as HTMLElement;

export interface ModalProps {
    fadingOut?: boolean;
    closeOnOutsideClick?: boolean;
    onClose: () => void;
    className?: string;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
    onClose,
    fadingOut,
    closeOnOutsideClick,
    className,
    children,
}): JSX.Element => {
    const el = useRef(document.createElement('div'));

    useEffect(() => {
        // Use this in case CRA throws an error about react-hooks/exhaustive-deps
        const current = el.current;

        // We assume `modalRoot` exists with '!'
        modalRoot!.appendChild(current);
        return () => void modalRoot!.removeChild(current);
    }, []);

    const handleOverlayClick = () => {
        if (closeOnOutsideClick) {
            onClose();
        }
    };

    return (
        <>
            {ReactDOM.createPortal(
                <div className={styles.root}>
                    <div
                        className={classNames(styles.container, className, {
                            [styles.fadeOut]: fadingOut,
                        })}
                    >
                        <Button
                            className={styles.close}
                            border={false}
                            onClick={onClose}
                            size={COMPONENTS_SIZE_ENUM.SMALL}
                            style={BUTTON_STYLE_ENUM.TRANSPARENT}
                        >
                            <>&#10006;</>
                        </Button>
                        {children}
                    </div>
                    <div
                        role="presentation"
                        className={styles.overlay}
                        onClick={handleOverlayClick}
                    />
                </div>,
                el.current,
            )}
        </>
    );
};
