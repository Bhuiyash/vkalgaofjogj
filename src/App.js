import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
import OpenMenu from "./components/OpenMenu/OpenMenu";
import MealsSummary from "./components/Meals/MealsSummary";
const App = () => {
  const openCart = () => {
    setIsCartOpen(true);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <CartProvider>
      {isCartOpen && <Cart closeCart={closeCart} />}
      <Header clickOnCart={openCart} />
      <main>
        <MealsSummary />
        {
          <OpenMenu
            btnTitle={openMenu ? "Close Menu" : "Open Menu"}
            openMenu={() => {
              setOpenMenu(!openMenu);
            }}
          />
        }
        {openMenu && <Meals />}
      </main>
    </CartProvider>
  );
};
export default App;
