import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';

import Home from './pages/Home';
import View from './pages/View';
import ScrollToTop from './utils/ScrollToTop';

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
      </Router>
    </div>
  );
}

export default App;