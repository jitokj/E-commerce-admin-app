import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import SignIn from "./containers/Signin";
import SignUp from "./containers/Signup";
import PrivateRoutes from "./components/Hoc/privateRoutes";
import { useDispatch, useSelector } from "react-redux";
import { isUserloggedIn } from "./actions/index";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserloggedIn());
    }
  }, [auth, dispatch]);
  return (
    <div>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoutes path="/" component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
