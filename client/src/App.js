import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/pages/Home.js"
import Contact from "./components/pages/Contact.js"
import Portfolio from "./components/pages/Portfolio"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <br/>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact}/>
      </div>
    </Router>

  )

}

export default App;