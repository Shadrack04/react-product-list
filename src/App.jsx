import { useState } from "react";
import "./App.css";
import "./index.css";
import Product from "./components/Product";
import Order from "./components/Order";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-6 pb-8">
      <Product />
      <Order />
    </div>
  );
}

export default App;
