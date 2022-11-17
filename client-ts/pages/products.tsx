import React from "react";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination/Pagination";
import Product from "../components/Product/Product";

function Products() {
  return (
    <div>
      <h1 className="text-darkerGray text-center font-extrabold text-4xl mt-16 mb-32">
        Our Products
      </h1>
      <div className="flex gap-8">
        <Filters />
        <div>
          <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Products;
