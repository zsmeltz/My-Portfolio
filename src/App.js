import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home.js";
import Contact from "./components/pages/Contact.js";
import Portfolio from "./components/pages/Portfolio.js";
function App() {
  return (
    <div style={{ backgroundColor: "#DCDCDC", width: "100%", height: "100%" }}>
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/My-Portfolio" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    </div>
  );
}

export default App;
