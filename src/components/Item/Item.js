import React from 'react';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import  styles from '../../App.module.css';

const Item = ({action, isDone}) => (
<span>
    <span className={
        classnames({
            [styles.item]: true,
            [styles.done]: isDone
        })
        }>{action}
    </span>
    <span>
        <IconButton aria-label="delete" >
                <DeleteIcon />
        </IconButton>
    </span>
</span>
);

export { Item };