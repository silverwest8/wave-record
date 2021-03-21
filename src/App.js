import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Entry from "./component/Entry";
import Main from "./component/Main";

function App() {
  return (
    <div className="App" style={{ width: '100%', height: '100vh', backgroundColor: '#77919d' }}>
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
