import React, { useState, useEffect, useRef } from "react";
import CardContainer from "../components/CardContainer";
import Hero from "../components/Hero";
import NavCarousel from "../components/NavCarousel";
import StickyNavbar from "../components/StickyNavbar";

const Home = () => {
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerWidth >= 768 ? 660 : 340;

      if (scrollY > threshold) {
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
    <div
      className={
        showStickyNavbar ? "stickyNavbarVisible" : "stickyNavbarHidden"
      }
    >
      <div className="container py-3">
        <Hero />
        <NavCarousel />
      </div>
      {showStickyNavbar && <StickyNavbar />}
      <div className="container">
        <CardContainer />
      </div>
    </div>
  );
};

export default Home;
