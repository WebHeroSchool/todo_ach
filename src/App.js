import React from 'react';
import { InputItem } from './components/InputItem/InputItem';
import { ItemList } from './components/ItemList/ItemList';
import { Footer } from './components/Footer/Footer';
import  styles from './App.module.css';

const App = () => {
  const Itemslist = [
    {
      value: 'первое'
    },
    {
      value:'второе'
    },
    {
      value: 'третье'
    }];

  return (
  <div className={styles.container}>
    <h1 className={styles.container_title}>Важные дела</h1>
    <InputItem />
    <ItemList items={Itemslist}/>
    <Footer count={3}/>
  </div>
);
}

export default App;
