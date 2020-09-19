import React from 'react';

import { Item } from '../Item/Item';
import styles from '../../App.module.css';

const ItemList = ({ items, onButton }) => (<ul>
    {items.map((item,index) => <li key={item.value}
    >
       <span className={styles.container_list}>
         <Item 
         action={item.value} 
         isDone={item.isDone} 
         id={item.id} 
         onButton={onButton} /></span>
    </li>)}
</ul>);

export { ItemList };