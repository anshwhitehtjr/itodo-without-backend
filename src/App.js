import { useState } from "react";
import Alert from "./AppComponents/Alert";
import Navbar from "./AppComponents/Navbar";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./Pages/About";

function App () {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <Router>
      <Navbar title="iTodo" mode="light" />
      <Alert alert={ alert } />
      <Switch>
        <Route exact path='/'>
          <Home showAlert={ showAlert } />
        </Route>
        <Route exact path='/about'>
          <About showAlert={ showAlert } />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
