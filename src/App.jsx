import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { Home, About, Cart, Contacts, Branches, PageNotFound } from "./pages";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Login from "./components/Login";

export const UseAllContext = createContext();

function App() {
  const [foods, setFoods] = useState([]);
  const [mapCart, setmapCart] = useState([]);
  const [count, setCount] = useState(1);
  const [showButton, setShowButton] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [activeLogout, setActiveLogout] = useState(
    !localStorage.getItem("activeLogin") ||
      localStorage.getItem("activeLogin") === "none",
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://66392cd04253a866a2509d4c.mockapi.io/admin/base/food",
        );
        setFoods(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storedCartItems =
      JSON.parse(localStorage.getItem("cartStorage")) || [];
    setmapCart(storedCartItems);
  }, []);

  const addToCart = (food) => {
    const buyFood = {
      id: food.id,
      title: food.title,
      description: food.description,
      image: food.img,
      counts: count,
      prices: food.price,
    };

    setmapCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === buyFood.id,
      );

      if (existingIndex !== -1) {
        prevCart[existingIndex].counts = count;
        return [...prevCart];
      } else {
        return [...prevCart, buyFood];
      }
    });

    let cartItems = JSON.parse(localStorage.getItem("cartStorage")) || [];
    const existingIndex = cartItems.findIndex((item) => item.id === buyFood.id);

    if (existingIndex !== -1) {
      cartItems[existingIndex].counts = count;
    } else {
      cartItems.push(buyFood);
    }
    localStorage.setItem("cartStorage", JSON.stringify(cartItems));
  };

  const updateCount = (index, newCount) => {
    if (newCount <= 10) {
      if (newCount >= 1) {
        const updatedCart = [...mapCart];
        updatedCart[index].counts = newCount;
        setmapCart(updatedCart);
        localStorage.setItem("cartStorage", JSON.stringify(updatedCart));
      } else {
        const updatedCart = [...mapCart];
        const removedItem = updatedCart.splice(index, 1)[0];
        setmapCart(updatedCart);
        localStorage.setItem("cartStorage", JSON.stringify(updatedCart));
        const element = document.getElementById(removedItem.id);
        if (element) {
          element.parentNode.removeChild(element);
        }
      }
    }
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      const cartStorage = JSON.parse(localStorage.getItem("cartStorage"));
      if (cartStorage && Array.isArray(cartStorage)) {
        const totalPrice = cartStorage.reduce(
          (total, item) => total + item.prices * item.counts,
          0,
        );
        return totalPrice;
      } else {
        return 0;
      }
    };

    setTotalPrice(calculateTotalPrice());
  }, [localStorage.getItem("cartStorage")]);

  return (
    <div className="w-full">
      <UseAllContext.Provider
        value={{
          foods,
          addToCart,
          count,
          showButton,
          mapCart,
          updateCount,
          setCount,
          totalPrice,
          open,
          handleOpen,
          handleClose,
        }}
      >
        <Header />
        <div className="container">
          <Login />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UseAllContext.Provider>
    </div>
  );
}

export default App;
