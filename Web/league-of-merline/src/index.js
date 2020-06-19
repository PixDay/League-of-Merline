import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from './components/sign-in/sign-in';
import SignUp from './components/sign-up/sign-up';
import Board from './components/home/home';
import Profile from './components/profile/profile.ts';

ReactDOM.render(
    <Router>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp}/>
      <Route exact path="/board" component={Board} />
      <Route exact path="/profile" component={Profile} />
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
