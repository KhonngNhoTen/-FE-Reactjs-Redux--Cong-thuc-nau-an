import React from 'react';
import clsx from 'clsx'
import styles from './RoundButton.module.scss'
export const RoundButton = ({children, value,type,...props}) => {
    console.log(children);
    console.log(value);
    return (
        <input type="button"
            className={clsx(
                [styles.roundButton],
                [styles[type]]
            )}
            value={children} />
    );
};
