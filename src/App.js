import React from 'react';
import { InputItem } from './components/InputItem/InputItem';
import { ItemList } from './components/ItemList/ItemList';
import { Footer } from './components/Footer/Footer';
;
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
  <div>
    <h1>Важные дела</h1>
    <InputItem />
    <ItemList items={Itemslist}/>
    <Footer count={3}/>
  </div>
);
}

export default App;
