import React from 'react';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import  styles from '../../App.module.css';

class Item extends React.Component {
    render() {
        return <span>
                    <span className={
                        classnames({
                            [styles.item]: true,
                            [styles.done]: this.props.isDone
                        })
                        }>{this.props.action}
                    </span>
                    <span>
                        <IconButton aria-label="delete" >
                                <DeleteIcon />
                        </IconButton>
                    </span>
                </span>
    }
};


export { Item };