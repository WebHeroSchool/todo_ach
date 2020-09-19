import React from 'react';

import { Item } from '../Item/Item';
import styles from '../../App.module.css';

const ItemList = ({ items, onButton, onDelete }) => (<ul>
    {items.map((item,index) => <li key={item.value}
    >
       <span className={styles.container_list}>
         <Item 
         action={item.value} 
         isDone={item.isDone} 
         id={item.id} 
         onButton={onButton}
         onDelete={onDelete}
        /></span>
    </li>)}
</ul>);

export { ItemList };