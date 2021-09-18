import './App.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" >
          <Redirect to="/login" />
        </Route>
        <Route path="/login" >
          <LogIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
