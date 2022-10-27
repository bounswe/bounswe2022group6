import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from "./pages/Landing"
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <div>
          <Switch>
              <Route exact path="/" component={ Landing } />
              <Route exact path="/login" component={ Login }/>
              <Route exact path="/home" component={ Home }/> 
              <Route path="/register" component={ Register } />
              <Route path="/profile" component={ Profile } />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
