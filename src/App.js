import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'animate.css';

import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';

import Home from './pages/Home';
import View from './pages/View';

import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';

import ScrollToTop from './utils/ScrollToTop';

import data from './static-data.json';

console.log(data);

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <ScrollToTop>
          <Switch>
            <Route path="/view/:id" component={withRouter(View)} />
            <Route exact path="/" component={Home} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
