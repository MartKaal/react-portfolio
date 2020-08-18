import React from 'react';
import styles from './Hero.module.css';

import Button from '../UI/Button/Button';

function Hero() {
    return (
        <div className={styles.hero}>
            <h3>MART KAAL</h3>
            <h1>WEB DEVELOPER</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                condimentum pulvinar quam et suscipit. Ut sagittis lectus leo,
                quis interdum dui feugiat in. Vestibulum tempor nunc ut ipsum
                viverra pellentesque. Aenean maximus vulputate lectus.
            </p>
            <Button link="projects">My work</Button>
        </div>
    );
}

export default Hero;
