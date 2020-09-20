import React from 'react';

import { InputItem } from './components/InputItem/InputItem';
import { ItemList } from './components/ItemList/ItemList';
import { Footer } from './components/Footer/Footer';
import  styles from './App.module.css';

class App extends React.Component {
  state = {
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

  //constructor(props) {
  //  super(props)
  //  this.onButton = this.onButton.bind(this);
 // }

  onButton = (id) => {
    const newItemsList = this.state.Itemslist.map(item=>{
      const newItem = { ...item }
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;

    });
    this.setState({Itemslist: newItemsList})
    console.log("press=",id)
  
  }

  onDelete = (id) => {
    const newItemsList = this.state.Itemslist.filter(item => {
      return item.id !== id
    })
    this.setState({ Itemslist: newItemsList, count: newItemsList.length })
  };
  

  render() {
    return (
    <div className={styles.container}>
      <h1 className={styles.container_title}>Важные дела</h1>
      <InputItem />
      <ItemList 
      items={this.state.Itemslist} 
      onButton={this.onButton}
      onDelete={this.onDelete}
      />
      <Footer classes={styles} count={this.state.Itemslist.length}/>
    </div>
  );
  };
};

export default App;
