/* eslint react/prop-types: 0 */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { searchItems } from "../services";

function ProductList({ location }) {
  const [data, setData] = useState({});

  //Todo: buscar otra forma: useParams ???

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

  /*Todo: SACAR BREADCRUMBS - PRODUCTITEM - ProductDetail Puede ser mejor tenerlos por separado */

  return (
    <>
      <Search />
      <div className="main">
        <div className="bread-crumb">
          {data.categories &&
            data.categories.length > 0 &&
            data.categories[0].values.length > 0 &&
            data.categories[0].values[0].path_from_root.map((crumb) => {
              return (
                <>
                  <span>{crumb.name}</span>
                  <svg
                    className="arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="8"
                  >
                    <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
                  </svg>
                </>
              );
            })}
        </div>
        <div className="result-container">
          {items &&
            items.map((item) => {
              return (
                <div key={item.id} className="product">
                  <div className="items">
                    <Link className="product-img" to={`/items/${item.id}`}>
                      <img src={item.picture} alt="" />
                    </Link>
                    <div className="text">
                      <span>${item.price.amount}</span>
                      <img src="" alt="" />
                      <p>{item.title}</p>
                    </div>
                    <p className="province">Lorem, ipsum.</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
