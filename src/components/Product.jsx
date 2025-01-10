import React from "react";
import { products } from "../products";

function Product() {
  return (
    <div className=" mb-4">
      <h1 className=" text-4xl font-bold my-4 font-redhat">Desserts</h1>
      <div className="">
        <ItemList />
      </div>
    </div>
  );
}

function ItemList() {
  const screen = window.screen.width;
  return (
    <ul className=" sm:grid sm:grid-cols-3 gap-4">
      {products.map((product) => (
        <Item key={product.name} product={product} screen={screen} />
      ))}
    </ul>
  );
}

function Item({ product, screen }) {
  const showBtn = false;
  return (
    <li className="">
      <div className=" mb-6 relative w-full ">
        <img
          className=" rounded-lg h-54"
          src={
            screen <= 450
              ? product.image.mobile
              : screen <= 850
              ? product.image.tablet
              : product.image.desktop
          }
          alt={`Image of ${product.name}`}
        />
        <button className=" group/add flex items-center justify-center gap-2 w-[200px] py-2 px-4 text-xl font-semibold bg-[#fff] border border-[#C7390E] rounded-full absolute -bottom-6 left-[50%] transform -translate-x-[50%] hover:bg-[#C7390E] hover:text-[#fff] transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            fill="none"
            viewBox="0 0 21 20"
            className=" group-hover/add:fill-[#fff] fill-[#C73B0F] w-6 h-6 transition-colors duration-300"
          >
            <g clipPath="url(#a)">
              <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
              <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M.333 0h20v20h-20z" />
              </clipPath>
            </defs>
          </svg>
          Add to Cart
        </button>

        {showBtn && (
          <button className=" group/add flex items-center justify-between gap-2 w-[200px] py-2 px-6 text-xl font-semibold bg-[#C7390E] border border-[#C7390E] rounded-full absolute -bottom-6 left-[50%] transform -translate-x-[50%] hover:bg-[#C7390E] hover:text-[#fff] transition-colors duration-300">
            <div className=" border-2 border-[#fff] p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                viewBox="0 0 10 2"
                className=" w-3 h-3"
              >
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
              </svg>
            </div>
            <span className=" text-[#fff] text-xl">0</span>
            <div className=" border-2 border-[#fff] p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
                className=" w-3 h-3"
              >
                <path
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </div>
          </button>
        )}
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
