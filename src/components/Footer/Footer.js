import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../App.module.css';

const Footer = (props) => {
        return (<span>Дел осталось: 
            <span className={ styles.footer }>{ props.count }</span><br/>
                <span>
                    <button variant="contained">Все</button>
                    <button variant="contained">Активные</button>
                    <button variant="contained">Выполненные</button>
                    <button variant="contained">Удалить выполненные дела</button>
                </span>
            </span>)
}
Footer.defaultProps = {
    count: 0
}

export { Footer };