/* eslint react/prop-types: 0 */
import React, { useEffect, useState } from "react";
import Search from "./Search";
import { getItemById } from "../services";
import { BreadCrumb } from "../components/BreadCrumb";

function Product({ match }) {
  const [item, setItem] = useState({});

  const crumbData = [{ name: "Crumb" }];

  const fetchItemById = async () => {
    const data = await getItemById(match.params.id);
    setItem(data.item);
  };

  useEffect(() => {
    fetchItemById();
  }, []);

  return (
    <>
      <Search></Search>
      <div className="main">
        <BreadCrumb data={crumbData}></BreadCrumb>

        <div className="result-container">
          {item && item.price && (
            <div className="single-product-container">
              <div className="product-info">
                <div className="product-img">
                  <img src={item.picture} alt="" />
                </div>
                <div className="product-info-button">
                  <div>
                    <span className="subtitle">
                      {item.condition} - {item.soldQuantity} vendidos
                    </span>
                  </div>
                  <div className="title-container">
                    <h1>{item.title}</h1>
                  </div>
                  <div className="price-container">
                    <span>
                      <span className="price-tag-symbol">$</span>
                      <span className="price-tag-symbol">
                        {item.price.amount}
                      </span>
                    </span>
                  </div>
                  <button>
                    <span>Comprar</span>
                  </button>
                </div>
              </div>

              <div className="product-description">
                <div>
                  <h2>Descripción del producto</h2>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
