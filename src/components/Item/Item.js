import React, { useState }  from 'react';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

import  styles from './Item.module.css';
import CardWrapper from '../hoc/CardWrapper/CardWrapper';

const Item = (props) => {
  const initData = {
    fixitem: false,
    currentName: ''
  };
  const [fixitem, setFixItem] = useState(initData.fixitem);
  const [currentName, setcurrentName] = useState(initData.currentName);

  const onBlur = () => {
    setFixItem(false);
  };
    
    return <span className={styles.wrapper}>
          <input
        type='checkbox'
        className={styles.checkbox}
        id={props.id}
        defaultChecked={props.isDone}
      />
      {!fixitem ?<label
        htmlFor={props.id}
        className={styles.label}
        onClick={() => props.onButtonHandler(props.id)}
        onDoubleClick={() => {
          setFixItem(true)
          //setcurrentName(props.onDoublenHandler(props.id))
          console.log(currentName)
        }}
      >
        {props.action}
      </label> :  <input
            type='text'
            className={styles.input}
            id="inputval"
            margin="dense"
            value={props.onDoublenHandler(props.id)}
            onChange={(event)=> {
              props.onItemFixHandler(props.id, event.target.value.toUpperCase())
              }
            }
            onBlur={ onBlur } 
            />}
                    <button 
                    className={styles['button_delete']}
                    
                    onClick={()=>props.onDeleteHandler(props.id)}
                    >
                    </button>
        </span>
}

export { Item };