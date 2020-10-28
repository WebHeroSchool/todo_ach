import React, { useState } from 'react';
import classnames from 'classnames';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import  styles from './InputItem.module.css';

const InputItem = (props) => {
    const initData = {
        inputValue: '',
        error: false,
        validationText: ''
    }

    const [inputValue, setInputValue] = useState(initData.inputValue);
    const [validationText, setValidationText] = useState(initData.validationText);
    const [error, setError] = useState(initData.error);

    const onButtonClickHandler = () => {
        let pastedValue = inputValue;
        if (pastedValue !== '') {
            setError(false)
            props.onAddHandler(pastedValue)
            setInputValue('')
            setValidationText('')
        } else {
            setError(true)
            setValidationText('Введите что-то!')
        }
        
    }

    return (<div>
        {error ? <span style={{color: "red"}}>{validationText}</span> : '' }
        <input
            type='text'
            className={styles.input}
            id="standard-dense"
            placeholder='Просто введите сюда название дела'
            margin="dense"
            value={inputValue}
            onChange={(event)=> setInputValue(event.target.value.toUpperCase())}
            helperText = {validationText}
            required
            />

        <input
            type='button'
            className={styles['button_add']}
            variant="contained"
            color="default"
            fullWidth
            onClick={() => onButtonClickHandler()}
            />

    </div>)
}

export { InputItem };



