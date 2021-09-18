import './App.css';
import LogIn from './components/LogIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
          <LogIn />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
