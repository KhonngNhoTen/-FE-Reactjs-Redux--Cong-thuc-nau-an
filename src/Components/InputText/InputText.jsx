import React from 'react';
import styles from './InputText.module.scss';
export const InputText = ({ type, placeholder, ...props }) => {
    return (
        <div className={styles.input}>
            <input className={styles.field} type={type} placeholder={placeholder} />
        </div>
    )
};
