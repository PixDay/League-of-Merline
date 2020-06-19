import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from './component/sign-in/sign-in';
import SignUp from './component/sign-up/sign-up';
import Board from './component/board/board';

ReactDOM.render(
  <Router>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/board" component={Board} />
    </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
