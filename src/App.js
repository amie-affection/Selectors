import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FormPage from "./pages/FormPage/FormPage";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import CounterPage from "./pages/CounterPage/CounterPage";
import ModalPage from "./pages/ModalPage/ModalPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/formPage" component={FormPage} />
        <Route path="/counterPage" component={CounterPage} />
        <Route path="/modalPage" component={ModalPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
