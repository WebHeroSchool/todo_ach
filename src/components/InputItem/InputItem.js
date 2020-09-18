import React from 'react';
import classnames from 'classnames';

import TextField from '@material-ui/core/TextField';

import  styles from '../../App.module.css';

class InputItem extends React.Component {
    render() {
        return <div className= {
            classnames({
                [styles.input]: true,
          })
        }>
            <TextField
                id="standard-dense"
                label="Добавить задачу"
                margin="dense"
            />
        </div>
    };
};

export { InputItem };



