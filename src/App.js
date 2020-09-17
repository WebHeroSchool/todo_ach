import React from 'react';

import { InputItem } from './components/InputItem/InputItem';
import { ItemList } from './components/ItemList/ItemList';
import { Footer } from './components/Footer/Footer';
import  styles from './App.module.css';

class App extends React.Component {
  state = {
    Itemslist: [
      {
        value: 'первое',
        isDone: false
      },
      {
        value:'второе',
        isDone: true
      },
      {
        value: 'третье',
        isDone: false
      }]
  };

  render() {
    return (
    <div className={styles.container}>
      <h1 className={styles.container_title}>Важные дела</h1>
      <InputItem />
      <ItemList items={this.state.Itemslist}/>
      <Footer classes={styles} count={3}/>
    </div>
  );
  };
};

export default App;
