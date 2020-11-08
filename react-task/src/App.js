import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './pages/Users';
import Main from './pages/Main';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <aside className='menu-aside'>
          <div className="menu">
            <Link to="/">Главная</Link>
            <Link to="/Users">Сотрудники</Link>
          </div>
        </aside>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
//onClick={() => setUsers([...users, {name: 'vova'}])}