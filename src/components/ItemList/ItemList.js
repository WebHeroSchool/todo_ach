import React from 'react';

import { Item } from '../Item/Item';
import styles from '../../App.module.css';

class ItemList extends React.Component {
  componentDidMount() {
    console.log("ItemList component mounting")
  }
  
  componentDidUpdate() {
      console.log("ItemList component updating")
  }
  
  componentWillUnmount() {
      console.log("ItemList component unmounting")
  }

  render() {
    return <ul>
    {this.props.items.map((item,index) => <li key={item.id}
    >
       <span className={styles.container_list}>
         <Item 
         action={item.value} 
         isDone={item.isDone} 
         id={item.id} 
         onButton={this.props.onButton}
         onDelete={this.props.onDelete}
        /></span>
    </li>)}
</ul>
  }
  
}

ItemList.defaultProps = {
  items: [{
    value: "Задача по умолчанию",
    isDone: false,
    id: 1
  }]
}
export { ItemList };