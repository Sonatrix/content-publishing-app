import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Feed from './components/Feed';
import Modal from './components/Modal';
import Booking from './components/Booking';
import Profile from './components/Profile';
import Products from './components/Products';
import ArticleView from './components/ArticleView';
import Editor from './components/Editor';
import requireAuthentication from './utils/requireAuth';
import SignInWith from './components/SignInWith';

export default class App extends Component {
  render() {
    const { pathname } = window.location || {};
    return (
      <div>
        {!pathname.includes('editor') ? <Header /> : ''}
        <SignInWith />
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route exact path="/booking" component={Modal} />
          <Route exact path="/booking/city/:id" component={Booking} />
          <Route exact path="/products" component={Products} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/articleview/:id" component={ArticleView} />
          <Route path="/editor" component={requireAuthentication(Editor)} />
          <Route path="**" component={Feed} />
        </Switch>
      </div>
    );
  }
}
