import React, { useState } from "react";
import "./style.css"
const Search = ({onSearch}) => {
  const [searchValue, setSearchValue] = useState("");
  const takeIn = (event) => {
    setSearchValue(event.target.value);
    console.log("I have keyed in", event.target.value);
  };
  const workit = () => {
    console.log("I am searching", searchValue);
    onSearch(searchValue)
  };
  return (
    <div className="nav">
        <p className="TheM">M<span className="answer">oo</span>vie</p>
      <input className="input"
        type="text"
        placeholder="search"
        value={searchValue}
        onChange={takeIn}
      />
      <button onClick={workit} className="searchButton">Search</button>
      <h3 className="Home1">Home</h3>
      <h3 className="MySpace">My List</h3>
      <button>Sign In</button>
    </div>
  );
};
export default Search;