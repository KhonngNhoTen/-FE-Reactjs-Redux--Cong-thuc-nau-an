import React from 'react';
import styles from './InputText.module.scss';
export const InputText = ({ type, placeholder,onChange,value, ...props }) => {
    return (
        <div className={styles.input}>
            <input 
                className={styles.field} 
                onChange = {onChange} 
                type={type} 
                placeholder={placeholder} 
                value = {value}
            />
        </div>
    )
};
