import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from "./pages/Landing"
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
          <Switch>
              <Route exact path="/" component={ Landing } />
              <Route exact path="/login" component={ Login }/>
              <Route exact path="/home" component={ Home }/> 
          </Switch>
      </div>
    </Router>
  );
}

export default App;
