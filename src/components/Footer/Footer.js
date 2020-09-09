import React from 'react';
import styles from '../../App.module.css';

const Footer = ({ count }) => (
    <div >
        Дел осталось: <span className={styles.footer}>{ count }</span>
    </div>
);

export { Footer };