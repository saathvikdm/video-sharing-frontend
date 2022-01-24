import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

import { LanguageProvider } from './context/languageContext';

import Home from './pages/Home';
import View from './pages/View';
import About from './pages/About';
import Videos from './pages/Videos';
import Audios from './pages/Audios';

import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';

import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Router>
          <NavbarComponent />
          <ScrollToTop>
            <Switch>
              <Route path="/view/:id" component={withRouter(View)} />
              <Route path="/about" component={About} />
              <Route path="/audios" component={Audios} />
              <Route path="/videos" component={Videos} />
              <Route exact path="/" component={Home} />
            </Switch>
          </ScrollToTop>
          <Footer />
        </Router>
      </LanguageProvider>
    </div>
  );
}

export default App;
