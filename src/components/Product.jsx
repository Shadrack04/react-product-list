import React from "react";
import { products } from "../products";

function Product() {
  return (
    <div className="  mb-4">
      <h1 className=" text-4xl font-bold my-4 font-redhat">Desserts</h1>
      <div>
        <ItemList />
      </div>
    </div>
  );
}

function ItemList() {
  return (
    <ul>
      {products.map((product) => (
        <Item key={product.name} product={product} />
      ))}
    </ul>
  );
}

function Item({ product }) {
  return (
    <li>
      <div className=" mb-6 relative w-full ">
        <img
          className=" rounded-lg h-54"
          src={product.image.mobile}
          alt={`Image of ${product.name}`}
        />
        <button className=" inline-block w-[200px] py-2 px-4 text-xl font-semibold bg-[#fff] border border-[#C7390E] rounded-full absolute -bottom-6 left-[50%] transform -translate-x-[50%] hover:bg-[#C7390E] hover:text-[#fff] transition-colors duration-300">
          Add to Cart
        </button>
      </div>
      <div className=" mb-3">
        <p className=" font-redhat text-s text-[#AD8984] font-normal">
          {product.category}
        </p>
        <h3 className=" text-l font-medium">{product.name}</h3>
        <h2 className=" text-xl font-semibold text-[#C7390E]">
          {`$${product.price.toFixed(2)}`}
        </h2>
      </div>
    </li>
  );
}

export default Product;
