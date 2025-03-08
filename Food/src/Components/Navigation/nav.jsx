import React from "react";
import "./nav.css";

const Nav = ({ search, filterByCategory }) => {
  return (
    <div>
      <nav>
        <div className="top">
          <div className="logo">
            F<span className="logo-1">OO</span>dy Z
            <span className="logo-1">O</span>ne
          </div>
          <div>
            <input
              type="search"
              className="search"
              onChange={search}
              placeholder="Search Food..."
            />
          </div>
        </div>

        <div className="FilterContainer">
          <button className="btn" onClick={() => filterByCategory("All")}>
            All
          </button>
          <button className="btn" onClick={() => filterByCategory("Breakfast")}>
            Breakfast
          </button>
          <button className="btn" onClick={() => filterByCategory("Lunch")}>
            Lunch
          </button>
          <button className="btn" onClick={() => filterByCategory("Dinner")}>
            Dinner
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
