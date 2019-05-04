import React from "react";
import About from "./pages/About";
import Bot from "./pages/Bot";
import ContactUs from "./pages/ContactUs";
import UpcomingDrop from "./pages/UpcomingDrop";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <Router>
    <div>
    <Navbar />
    <Switch>
     <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/bot" component={Bot} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/upcomingdrop" component={UpcomingDrop} />
      <Route component={NoMatch} />
      </Switch>
    </div>
    </Router>
  );
}


export default App;
