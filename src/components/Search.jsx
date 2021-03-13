import React from "react";
import search from "../images/ic_Search.png";
import logo from "../images/Logo_ML.png";

function Search() {
  return (
    <form className="container">
      <div className="search">
        <img className="logo" src={logo} />
        <input
          type="text"
          className="search-input"
          placeholder="Nunca dejes de buscar"
        />
        <button type="submit">
          <div>
            <img src={search} />
          </div>
        </button>
      </div>
    </form>
  );
}

export default Search;
