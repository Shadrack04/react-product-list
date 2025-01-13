import { useState } from "react";
import "./App.css";
import "./index.css";
import Product from "./components/Product";
import Order from "./components/Order";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(item) {
    let isItemInCart = false;
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.name === item.name) {
        isItemInCart = true;
        return { ...cartItem, quantity: Number(cartItem.quantity) + 1 };
      } else {
        return cartItem;
      }
    });

    if (!isItemInCart) {
      updatedCart.push({ ...item, quantity: 1 });
    }
    setCart(updatedCart);
  }

  function handleIncreaseQuantity(name) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function removeItemFromCart(name) {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  }

  function handleDecreaseQuantity(name, quantity) {
    if (quantity < 2) {
      removeItemFromCart(name);
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }

  return (
    <div className="px-6 pb-8 sm:grid sm:grid-cols-[70%_25%] gap-8 sm:py-8 sm:px-10">
      <Product
        cart={cart}
        handleAddToCart={handleAddToCart}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
      />
      <Order cart={cart} />
    </div>
  );
}

export default App;
