import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';

import { ToDo } from './components/ToDo/ToDo';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';
import  styles from './App.module.css';

const App = () => {
    return (
      <Router>
        <div className={styles.main_container}>
          <header className={styles.header}>
            <NavLink
              className={styles.navlink}
              activeClassName={styles.active}
              to="/"
              exact
            >Обо мне</NavLink>
            <NavLink
              className={styles.navlink}
              activeClassName={styles.active}
              to="/todo"
              exact
            >Дела</NavLink>
          </header>
          <Route path="/" exact component={About} />
          <Route path="/todo" component={ToDo} />
          <Route path="/contact" component={Contacts} />
        </div>
      </Router>
  );
};

export default App;
