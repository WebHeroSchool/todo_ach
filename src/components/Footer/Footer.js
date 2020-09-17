import React from 'react';
import styles from '../../App.module.css';

const Footer = ({ count, classes }) => {

return (
        <span>Дел осталось: <span className={styles.footer}>{ count }</span><br/>
            <span>
                <button variant="contained">Все</button>
                <button variant="contained">Активные</button>
                <button variant="contained">Выполненные</button>
                <button variant="contained">Удалить выполненные дела</button>
            </span>
        </span>
);
}

export { Footer };