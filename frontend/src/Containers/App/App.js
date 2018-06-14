import React from "react"
import {Route, Switch} from "react-router-dom";

import Calculator from "../Calculator/Calculator";
import "../Calculator/calculator.css"

const App = () => {
  return (
    <Switch>
      <Route path='/' component={Calculator}/>
    </Switch>
  )
};

export default App
