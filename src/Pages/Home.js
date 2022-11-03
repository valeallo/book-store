import React from "react";
import Navbar from "../components/Navbar";
import BookList from "../components/BookList";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BookList />
      <Footer />
    </div>
  );
};

export default Home;
