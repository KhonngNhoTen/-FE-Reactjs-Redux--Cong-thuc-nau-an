import React from 'react';
import clsx from 'clsx'
import styles from './RoundButton.module.scss'
export const RoundButton = ({ children, type, onClick, ...props }) => {
    return (
        <input type="button"
            className={clsx(
                [styles.roundButton],
                [styles[type]]
            )}
            value={children}
            onClick={onClick}
        />
    );
};
