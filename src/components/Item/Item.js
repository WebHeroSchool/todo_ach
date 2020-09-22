import React from 'react';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

import  styles from '../../App.module.css';

class Item extends React.Component {
    componentDidMount() {
        console.log("Item component mounting");
        //this.timerId = setInterval(()=> console.log("interval"), 1000)

      }
    
      componentDidUpdate() {
          console.log("Item component updating");
      }
    
      componentWillUnmount() {
          console.log("Item component unmounting");
          clearInterval(this.timerId)
      }
    render() {
        return <span>
            <Checkbox
                checked={this.props.isDone}
                onClick={()=>this.props.onButton(this.props.id)}
                ></Checkbox>
                    <span className={
                        classnames({
                            [styles.item]: true,
                            [styles.done]: this.props.isDone
                        })
                        }
                        >{this.props.action}
                    </span>
                    <span>
                        <IconButton 
                        aria-label="delete"
                        onClick={()=>this.props.onDelete(this.props.id)}
                        >
                                <DeleteIcon />
                        </IconButton>
                    </span>
                </span>
    }
}



export { Item };