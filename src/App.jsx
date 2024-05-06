import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { Home, About, Cart, Contacts, Branches, PageNotFound } from "./pages";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UseAllContext = createContext();

function App() {
  const [foods, setFoods] = useState([]);
  const [mapCart, setmapCart] = useState([]);
  const [count, setCount] = useState(1);
  const [showButton, setShowButton] = useState(true);

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
    if (newCount >= 1) {
      const updatedCart = [...mapCart];
      updatedCart[index].counts = newCount;
      setmapCart(updatedCart);
      localStorage.setItem("cartStorage", JSON.stringify(updatedCart));
    }
  };

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
        }}
      >
        <Header />
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
