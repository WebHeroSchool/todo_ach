import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import { ToDo } from './components/ToDo/ToDo';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';
import  styles from './App.module.css';

const App = () => {
    return (
      <Router>
          <Card>
          <MenuList>
            <Link className={styles.link} to="/"><MenuItem>Обо мне</MenuItem></Link>
            <Link className={styles.link} to="/todo"><MenuItem>Дела</MenuItem></Link>
            <Link className={styles.link} to="/contact"><MenuItem>Контакты</MenuItem></Link>
          </MenuList>
        </Card>
        <Card>
          <Route path="/" exact component={About} />
          <Route path="/todo" component={ToDo} />
          <Route path="/contact" component={Contacts} />
        </Card>
      </Router>
  );
};

export default App;
