import React from 'react';
import { Item } from '../Item/Item';

const actions = ['проснуться пораньше','почитать','погулять']
const ItemList = ({ items }) => (<ul>
    {items.map((item,index) => <li key={item.value}>
        {item.value}- 
         <Item action={actions[index]} />
    </li>)}
</ul>);

export { ItemList };