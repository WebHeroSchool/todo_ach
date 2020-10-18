import React from 'react';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

import  styles from '../../App.module.css';

const Item = (props) => {
    const componentDidMount = () => {
        console.log("Item component mounting");
        //this.timerId = setInterval(()=> console.log("interval"), 1000)

      }
    
      const componentDidUpdate = () => {
          console.log("Item component updating");
      }
    
      const componentWillUnmount = () => {
          console.log("Item component unmounting");
          //clearInterval(this.timerId)
      }
    
    return <span>
        <Checkbox
            checked={props.isDone}
            onClick={()=>props.onButtonHandler(props.id)}
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
                    onClick={()=>props.onDeleteHandler(props.id)}
                    >
                            <DeleteIcon />
                    </IconButton>
                </span>
            </span>
}

export { Item };