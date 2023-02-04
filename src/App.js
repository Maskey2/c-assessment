import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import C1 from "./component/Challenge1";
import C2 from "./component/Challenge2";
import C3 from "./component/Challenge3";
import Navbar from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>   
    <Navbar/>  
      <Switch>
        <Route exact path="/" component={Home}></Route>   
        <Route exact path="/challenge1" component={C1}></Route>   
        <Route exact path="/challenge2" component={C2}></Route>    
        <Route exact path="/challenge3" component={C3}></Route>       
      </Switch>
    </BrowserRouter>
  );
}

export default App;