import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Product from "./components/Product";
import Order from "./components/Order";
import ConfirmOrder from "./components/ConfirmOrder";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return JSON.parse(savedCart) || [];
  });
  const [showOrder, setShowOrder] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  function openCheckout() {
    setShowOrder(true);

    // disable background scrolling
    document.body.style.overflow = "hidden";
  }

  function closeCheckout(e) {
    console.log(e.target.textContent);
    setShowOrder(false);

    // enable background scrolling
    document.body.style.overflow = "auto";

    if (e.target.textContent === "Start New Order") {
      setCart([]);
    }
  }

  return (
    <div className=" relative px-6 pb-8 sm:grid sm:grid-cols-[65%_30%] gap-8 sm:py-8 sm:px-10">
      {showOrder && <ConfirmOrder cart={cart} closeCheckout={closeCheckout} />}

      <Product
        cart={cart}
        handleAddToCart={handleAddToCart}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
      />
      <Order cart={cart} setCart={setCart} openCheckout={openCheckout} />
    </div>
  );
}

export default App;
