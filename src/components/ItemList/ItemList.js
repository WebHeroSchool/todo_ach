import React from 'react';
import classnames from 'classnames';

import { Item } from '../Item/Item';
import styles from '../../App.module.css';

class ItemList extends React.Component {
  render() {
    const actions = ['проснуться пораньше','почитать','погулять']
    return <ul>
            {this.props.items.map((item,index) => <li key={item.value}>
              <span className={classnames({
                [styles.container_list]: true,
                [styles.done]: item.isDone
              })}> {item.value}- 
                <Item action={actions[index]} isDone={item.isDone}/></span>
            </li>)}
        </ul>
  };
};


export { ItemList };