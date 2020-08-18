import React from 'react';
import styles from './Button.module.css';

function Button(props) {
    return (
        <>
            <a href={props.link} className={styles.button}>
                {props.children}
            </a>
        </>
    );
}

export default Button;
