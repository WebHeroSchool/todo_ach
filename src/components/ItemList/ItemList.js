import React from 'react';
import { Item } from '../Item/Item';

const ItemList = (props) => (
    <ul>
        <li>{props.one}-<Item action={'проснуться пораньше'}/></li>
        <li>{props.two}-<Item action={'почитать'}/></li>
        <li>{props.three}-<Item action={'погулять'}/></li>
    </ul>
);

export { ItemList };