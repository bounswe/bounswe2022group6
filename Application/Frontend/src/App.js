import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from "./pages/Landing"
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div>
          <Switch>
              <Route exact path="/" component={ Landing } />
              <Route exact path="/login" component={ Login }/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
