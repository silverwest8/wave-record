import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Entry from "./component/Entry";
import Main from "./component/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Entry></Entry></Route>
          <Route exact path="/main"><Main></Main></Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
