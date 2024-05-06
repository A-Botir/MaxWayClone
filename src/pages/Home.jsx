import React, { useState, useEffect } from "react";
import CardContainer from "../components/CardContainer";
import Hero from "../components/Hero";
import NavCarousel from "../components/NavCarousel";
import StickyNavbar from "../components/StickyNavbar";

const Home = () => {
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 660) {
        setShowStickyNavbar(true);
      } else {
        setShowStickyNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container py-3">
        <Hero />
        <NavCarousel />
      </div>
      {showStickyNavbar && <StickyNavbar />}
      <div className="container">
        <CardContainer />
      </div>
    </>
  );
};

export default Home;
