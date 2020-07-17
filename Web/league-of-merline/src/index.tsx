import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from './component/sign-in/sign-in';
import SignUp from './component/sign-up/sign-up';
import Profile from './component/profile/profile';
import Contacts from './component/contact/contacts';

ReactDOM.render(
  <Router>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/contacts" component={Contacts} />
    </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
