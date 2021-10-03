import Home from "./pages/Homepage/Home";
import Navbar from "./components/Navbar";
import { Switch, Route, useLocation } from "react-router-dom";
import Planet from "./pages/Planet/Planet";
import NotFound from "./components/NotFound";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </>
  );
}

export default App;
