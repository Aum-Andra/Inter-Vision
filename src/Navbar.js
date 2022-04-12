import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ search, setSearch, setPage }) => {
  return (
    <div className="container-xxl">
      <nav>
        <Link to="/">
          <div className="logo" onClick={() => setSearch("")}>
            <img
              className="img-fluid"
              onClick={() => setPage(1)}
              src={logo}
              alt="logo"
            />
          </div>
        </Link>

        <div className="search-field">
          <Link to="/">
            <form>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button type="submit" className="btn btn-dark ">
                Search
              </button>
            </form>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
