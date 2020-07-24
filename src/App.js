import React from "react";
import NavBar from "../src/components/MainNB";
import MainPage from "../src/components/MainPage";
import GlobalStyles from "../src/components/GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <GlobalStyles />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
