/* eslint react/prop-types: 0 */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../images/Logo_ML.png";
import searchLogo from "../images/ic_Search.png";

function Search() {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    history.push(`/items?search=${search}`);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="search">
        <img className="logo" src={logo} />
        <input
          type="text"
          className="search-input"
          placeholder="Nunca dejes de buscar"
          name="search"
          onChange={handleChange}
        />
        <button type="submit">
          <div>
            <img src={searchLogo} />
          </div>
        </button>
      </div>
    </form>
  );
}

export default Search;
