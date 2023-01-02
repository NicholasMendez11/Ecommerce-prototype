import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";

const Product = ({ product }) => {
  const { image, name, slug, price } = product;
  const { onAdd } = useStateContext();
  return (
    <div>
      <div className="product-card">
        <Link href={`/product/${slug.current}`}>
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </Link>
        <button type="button" className="btn" onClick={() => onAdd(product, 1)}>
          add cart
        </button>
      </div>
    </div>
  );
};

export default Product;
