import React from 'react';

import { InputItem } from './components/InputItem/InputItem';
import { ItemList } from './components/ItemList/ItemList';
import { Footer } from './components/Footer/Footer';
import  styles from './App.module.css';

class App extends React.Component {
  state = {
    Itemslist: [
      {
        value: 'первое - проснуться пораньше',
        isDone: false
      },
      {
        value:'второе - почитать',
        isDone: true
      },
      {
        value: 'третье - погулять',
        isDone: false
      }]
  };

  //constructor(props) {
  //  super(props)
  //  this.onButton = this.onButton.bind(this);
 // }

  onButton = (event) => console.log("press=",event)
  

  render() {
    return (
    <div className={styles.container}>
      <h1 className={styles.container_title}>Важные дела</h1>
      <InputItem />
      <ItemList items={this.state.Itemslist} onButton={this.onButton}/>
      <Footer classes={styles} count={3}/>
    </div>
  );
  };
};

export default App;
