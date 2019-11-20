import React from 'react';
import { Header } from './components/header.js';
import Content  from './components/content.js';
import { Footer } from './components/footer.js';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';
import Cities from './components/cities';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Router>
                <Switch>
                  <Route exact={true} path="/" component={Content} />
                  <Route path="/cities" component={Cities} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                </Switch>  
      <Footer />
      </Router>
    </div>
    </Provider>
  );
}

export default App;
