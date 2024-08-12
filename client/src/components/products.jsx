import React, { useState, useEffect } from "react";
import ProductCard from "./productCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://localhost:3000/product")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-white my-4 text-2xl font-medium">
        Products
      </h1>
      <div className="grid grid-cols-1 p-8 gap-6 md:grid-cols-3 sm:grid-cols-2">
        {products.map((product, index) => (
          <ProductCard key={product.id || index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
