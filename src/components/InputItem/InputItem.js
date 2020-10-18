import React, { useState } from 'react';
import classnames from 'classnames';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import  styles from '../../App.module.css';

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

    return (<div className= {
        classnames({
            [styles.input]: true,
        })
        }>
        <TextField
            id="standard-dense"
            label="Добавить задачу"
            margin="dense"
            value={inputValue}
            onChange={(event)=> setInputValue(event.target.value.toUpperCase())}
            error= {error}
            helperText = {validationText}
            required
            />
            <span style={{color: "red"}}>{error["error"]}</span>

        <Button 
            variant="contained"
            color="default"
            fullWidth
            onClick={onButtonClickHandler}
            >Добавить</Button>

    </div>)
}

export { InputItem };



