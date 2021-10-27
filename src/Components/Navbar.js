import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { AccountContextData } from "./AccountContextData";

const Navbar = ({ handleDarkMode, mode, headLine, setHeadLine }) => {
  const [info] = useContext(AccountContextData);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();

    let result = info.filter((i) => {
      console.log(
        i.name.toLowerCase(),
        search.toLowerCase() === i.name.toLowerCase()
      );
      return i.name.toLowerCase() === search.toLowerCase();
    });
    console.log(result, " Search");
  };

  // const handleHeadLine = () => {
  //   setHeadLine("Expense Tracker");
  // };
  return (
    <>
      <nav
        className={`navbar container-fluid sticky-top bg-${mode} text-${
          mode === "light" ? "dark" : "light"
        }`}
      >
        {/* <Link to="/" className="btn " >
          <h5>{headLine}</h5>
        </Link> */}

        <h5>Expense Tracker</h5>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-outline-light"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
        {/* <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={handleDarkMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
