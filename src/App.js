import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FormPage from "./pages/FormPage/FormPage";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import CounterPage from "./pages/CounterPage/CounterPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/formPage" component={FormPage} />
        <Route path="/counterPage" component={CounterPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
