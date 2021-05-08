import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import SignIn from "./containers/Signin";
import SignUp from "./containers/Signup";
import PrivateRoutes from "./components/Hoc/privateRoutes";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoutes path="/" component={Home} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
