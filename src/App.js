import Home from "./pages/Homepage/Home";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Planet from "./pages/Planet/Planet";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:name" exact>
          <Planet />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
