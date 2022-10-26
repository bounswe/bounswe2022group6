import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from "./pages/Landing"

function App() {
  return (
    <Router>
      <div>
          <Switch>
              <Route exact path="/" component={ Landing } />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
