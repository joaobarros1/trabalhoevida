import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NextEvents from "./pages/NextEvents";
import Courses from "./pages/Courses";
import Partners from "./pages/Partners";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-wrapper mx-auto">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/next-events" element={<NextEvents />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/partners-events" element={<Partners />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
