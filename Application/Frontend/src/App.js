import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from "./pages/Landing"
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile'
import Register from './pages/Register'
import Post from './pages/Post'
import 'bootstrap/dist/css/bootstrap.min.css';

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
              <Route path = "/post/:postId" component={ Post } />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
