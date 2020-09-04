import React from 'react';
import { InputItem } from './components/InputItem/InputItem';
import { ItemList } from './components/ItemList/ItemList';
import { Footer } from './components/Footer/Footer';
;
const App = () => (
  <div>
    <h1>Важные дела</h1>
    <InputItem />
    <ItemList one={'первое'} two={'второе'} three={'третье'}/>
    <Footer count={3}/>
  </div>
);

export default App;
