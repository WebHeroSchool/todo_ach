import React from 'react';
import classnames from 'classnames';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import  styles from '../../App.module.css';

class InputItem extends React.Component {
    state = {
        inputValue: '',
        error: false,
        validationText: ''
    }

    onButtonClick = () => {
        let pastedValue = this.state.inputValue;
        if (pastedValue !== '') {
            this.setState({error: false})
            this.props.onAdd(pastedValue)
            this.setState({inputValue: '', validationText: ''})
        } else {
            this.setState({ error: true })
            this.setState({validationText: 'Введите что-то!'})
        }
        
    }

    render() {
        return (<div className= {
            classnames({
                [styles.input]: true,
          })
        }>
            <TextField
                id="standard-dense"
                label="Добавить задачу"
                margin="dense"
                value={this.state.inputValue}
                onChange={(event)=> this.setState({inputValue: event.target.value.toUpperCase()})}
                error= {this.state.error}
                helperText = {this.state.validationText}
                required
                />
                <span style={{color: "red"}}>{this.state.error["error"]}</span>

            <Button 
                variant="contained"
                color="default"
                fullWidth
                onClick={this.onButtonClick}
             >Добавить</Button>

        </div>)
    }
}

export { InputItem };



