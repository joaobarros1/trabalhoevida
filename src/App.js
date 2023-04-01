import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NextEvents from "./pages/NextEvents";

class App extends Component {
  render() {
    return (
      <Router>
        <div class="page-wrapper mx-auto">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/next-events" element={<NextEvents />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
