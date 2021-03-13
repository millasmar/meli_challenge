import React from "react";
import Search from "./Search";

function SingleProduct() {
  return (
    <>
      <Search></Search>
      <div className="main">
        <div className="bread-crumb">
          <span>Electrónica, Audio y Video</span>
          <svg
            className="arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
          >
            <span>Ipod</span>
            <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
            <span>Reproductores</span>
          </svg>
          <span>Ipod Touch</span>
          <svg
            className="arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
          >
            <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
          </svg>
          <span>32 GB</span>
        </div>
        <div className="result-container">
          <div className="single-product-container">
            <div className="product-info">
              <div className="product-img">
                <img
                  src="https://www.ventasrosario.com.ar/wp-content/uploads/2019/10/iphone11-select-2019-family.jpg"
                  alt=""
                />
              </div>
              <div className="product-info-button">
                <div>
                  <span className="subtitle">Nuevo - 234 vendidos</span>
                </div>
                <div className="title-container">
                  <h1>Deco Reverse Sombrero Oxford</h1>
                </div>
                <div className="price-container">
                  <span>
                    <span className="price-tag-symbol">$</span>
                    <span className="price-tag-symbol">1.980</span>
                  </span>
                </div>
                <button>
                  <span>Comprar</span>
                </button>
              </div>
            </div>

            <div className="product-description">
              <div>
                <h2>Lorem ipsum dolor sit amet.</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                fugiat dolore rem, quaerat officia inventore nam non debitis
                nulla numquam est expedita placeat illo eveniet repellendus
                asperiores quia eius impedit labore ab? Delectus, voluptatem ab!
                Illo, cumque. Iste?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
