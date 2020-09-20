import React from 'react';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

import  styles from '../../App.module.css';

const Item = (props) => (
            <span>
            <Checkbox
                checked={props.isDone}
                onClick={()=>props.onButton(props.id)}
                ></Checkbox>
                    <span className={
                        classnames({
                            [styles.item]: true,
                            [styles.done]: props.isDone
                        })
                        }
                        >{props.action}
                    </span>
                    <span>
                        <IconButton 
                        aria-label="delete"
                        onClick={()=>props.onDelete(props.id)}
                        >
                                <DeleteIcon />
                        </IconButton>
                    </span>
                </span>)




export { Item };