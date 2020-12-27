import './pages.scss';
import './pages.mobile.scss';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import History from '../../history';

import MainPage from './MainPage/MainPage';
import SecondPage from './SecondPage/SecondPage';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';

function pages() {
  return (
    <Router history={History}>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/second" component={SecondPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default pages;
