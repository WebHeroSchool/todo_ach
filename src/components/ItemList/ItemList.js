import React from 'react';
import { Item } from '../Item/Item';

const actions = ['проснуться пораньше','почитать','погулять']
const ItemList = (props) => (
    <ul>
        {props.one.map((item, index) => <li>{item}-<Item action={actions[index]}/></li>)}
    </ul>
);

export { ItemList };