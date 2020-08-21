import React from 'react';
import styles from './Nav.module.css';

function Nav() {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Theme</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
