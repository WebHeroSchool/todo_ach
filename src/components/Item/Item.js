import React from 'react';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

import  styles from './Item.module.css';
import CardWrapper from '../hoc/CardWrapper/CardWrapper';

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
    
    return <span className={styles.wrapper}>
          <input
        type='checkbox'
        className={styles.checkbox}
        id={props.id}
        defaultChecked={props.isDone}
      />
      <label
        htmlFor={props.id}
        className={styles.label}
        onClick={() => props.onButtonHandler(props.id)}
      >
        {props.action}
      </label>
                    <button 
                    className={styles['button_delete']}
                    
                    onClick={()=>props.onDeleteHandler(props.id)}
                    >
                    </button>
        </span>
}

export { Item };