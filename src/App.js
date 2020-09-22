import  React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { InputItem } from './components/InputItem/InputItem';
import { ItemList } from './components/ItemList/ItemList';
import { Footer } from './components/Footer/Footer';
import  styles from './App.module.css';

const App = () => {

  const initData = {
    Itemslist: [
      {
        id: 1,
        value: 'первое - проснуться пораньше',
        isDone: false
      },
      {
        id: 2,
        value:'второе - почитать',
        isDone: true
      },
      {
        id:3,
        value: 'третье - погулять',
        isDone: false
      }],
      count: 6
  };

  const [Itemslist, setItemslist] = useState(initData.Itemslist);
  const [count, setCount] = useState(initData.count);

  useEffect(()=>{
    console.log("App component componentDidMount");
  }, []);

  useEffect(()=>{
    console.log("App component componentDidUpdate");
  })

  const onButton = (id) => {
    const newItemsList = Itemslist.map(item=>{
      const newItem = { ...item }
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;

    });
    setItemslist(newItemsList)
    console.log("press=",id)
  
  }

  const onDelete = (id) => {
    const newItemsList = Itemslist.filter(item => {
      return item.id !== id
    })
    setItemslist(newItemsList);
    setCount(Itemslist.length)
  };

  const onAdd = (value) => {
    const newItem = {
      Itemslist: [
        ...Itemslist,
        {
          id: count+1,
          value,
          isDone: false
        },
      ],
      count: count + 1
    }
    setItemslist(newItem.Itemslist);
    setCount(newItem.count)
  };
  
    return (
    <div className={styles.container}>
      <h1 className={styles.container_title}>Важные дела</h1>
      <InputItem 
        onAdd = {onAdd} />
      <ItemList 
        items={Itemslist} 
        onButton={onButton}
        onDelete={onDelete}
      />
      <Footer 
        classes={styles} 
        count={Itemslist.length}/>
    </div>
  );
};

export default App;
