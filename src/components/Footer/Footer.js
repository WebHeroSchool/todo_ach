import React from 'react';
import styles from '../../App.module.css';

class Footer extends React.Component {
    render() {
        return <span>Дел осталось: 
            <span className={ styles.footer }>{ this.props.count }</span><br/>
                <span>
                    <button variant="contained">Все</button>
                    <button variant="contained">Активные</button>
                    <button variant="contained">Выполненные</button>
                    <button variant="contained">Удалить выполненные дела</button>
                </span>
            </span>
    };
}

export { Footer };