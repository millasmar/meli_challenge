/* eslint react/prop-types: 0 */
import React, { useEffect, useState } from "react";
import Search from "./Search";
import { searchItems } from "../services";
import { BreadCrumb } from "../components/BreadCrumb";
import { ProductItem } from "../components/ProductItem";

function ProductList({ location }) {
  const [data, setData] = useState({});

  const slug = location.search.slice(location.search.indexOf("=") + 1);

  const fetchItems = async () => {
    const data = await searchItems(slug);
    setData(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const getFewItems = (items) => items.slice(0, 4);

  const items = data.items ? getFewItems(data.items) : [];

  return (
    <>
      <Search />
      <div className="main">
        {data.categories &&
        data.categories.length > 0 &&
        data.categories[0].values.length > 0 &&
        data.categories[0].values[0].path_from_root ? (
          <BreadCrumb
            data={data.categories[0].values[0].path_from_root}
          ></BreadCrumb>
        ) : null}

        <div className="result-container">
          {items &&
            items.map((item) => {
              return <ProductItem key={item.id} item={item}></ProductItem>;
            })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
