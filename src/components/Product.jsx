import React from "react";

function Product() {
  return (
    <div className=" px-6">
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
      <Item />
    </ul>
  );
}

function Item() {
  const initialData = {
    image: {
      thumbnail: "../../public/images/image-waffle-thumbnail.jpg",
      mobile: "../../public/images/image-waffle-mobile.jpg",
      tablet: "./../public/images/image-waffle-tablet.jpg",
      desktop: "./../public/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  };

  return (
    <li>
      <div className="">
        <img
          className=" rounded-lg"
          src={initialData.image.mobile}
          alt={`Image of ${initialData.name}`}
        />
      </div>
      <button>Add to Cart</button>
      <div>
        <p className=" font-redhat">{initialData.category}</p>
        <h3>{initialData.name}</h3>
        <h2>{initialData.price}</h2>
      </div>
    </li>
  );
}

export default Product;
