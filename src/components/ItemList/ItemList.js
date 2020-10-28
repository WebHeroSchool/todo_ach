import React from 'react';

import { Item } from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = (props) => {
  function checkLink(item) {
    console.log(props.activeLink)
    if(props.activeLink == 'all') {
      return true;
    }
    if (props.activeLink == 'completed') {
      return item.isDone;
    }
    return !item.isDone;
  }
  return (
    <section className={styles.section}>
  {props.items.length > 0 && <ul className={styles['item-list']}>
  {props.items.filter(item => checkLink(item)).map((item,index) => <li key={item.id} className={styles.item}
  >
        <Item 
        action={item.value} 
        isDone={item.isDone} 
        id={item.id} 
        onButtonHandler={props.onButtonHandler}
        onDeleteHandler={props.onDeleteHandler}
      />
  </li>)}
</ul>}
{!props.items.length > 0 && <div className={styles['div_snafu']}>
          <img className={styles.snafu} src={require('../../img/empty-list.svg')} alt='empty tasks' />
          <h2 className={styles.subheading}>Вы еще не добавили ни одной задачи</h2>
          <p className={styles.paragraph}>
            Сделайте это прямо сейчас
          </p>
        </div>}
</section>
);
  
}

ItemList.defaultProps = {
  items: [{
    value: "Задача по умолчанию",
    isDone: false,
    id: 1
  }]
};

export { ItemList };