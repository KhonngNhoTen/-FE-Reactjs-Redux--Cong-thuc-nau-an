import React from 'react';
import styles from './LinkText.module.scss';
export const LinkText = ({ children, onClick }) => {
    return (
        <div 
            className= {styles.linkText}
            onClick={onClick}
        >
            { children }
        </div>
    )
};
