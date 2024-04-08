import React, { createContext, useState, useEffect } from "react";
// Retrieve carts and kitchens from localStorage
const storedStates = JSON.parse(localStorage.getItem("states")) || {};
const { carts: storedCarts = [], kitchens: storedKitchens = [] } = storedStates;
export const Context = createContext();

const ContextProvider = (props) => {
  const [cart, setCart] = useState(storedCarts);
  const [toggleCart, setToggleCart] = useState(true);

  const [kitchen, setKitchen] = useState(storedKitchens);
  const [toggleKitchen, setToggleKitchen] = useState(true);

  useEffect(() => {
    // Save carts and kitchens to localStorage
    const states = { carts: cart, kitchens: kitchen };
    localStorage.setItem("states", JSON.stringify(states));
  }, [cart, kitchen]);

  const value = {
    cart,
    setCart,
    kitchen,
    setKitchen,
    toggleCart,
    toggleKitchen,
    setToggleCart,
    setToggleKitchen,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default ContextProvider;
