import React from 'react';
import classnames from 'classnames';

import { Item } from '../Item/Item';
import styles from '../../App.module.css';

const actions = ['проснуться пораньше','почитать','погулять']
const ItemList = ({ items }) => (<ul>
    {items.map((item,index) => <li key={item.value}>
       <span className={styles.container_list}> {item.value}- 
         <Item action={actions[index]} isDone={item.isDone}/></span>
    </li>)}
</ul>);

export { ItemList };