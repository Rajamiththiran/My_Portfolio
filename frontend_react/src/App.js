import React from "react";
import "./App.scss";
import { NavBar } from "./components";
import { About, Footer, Header, Skills, Testimonials, Work } from "./container";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
