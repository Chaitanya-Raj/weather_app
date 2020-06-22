import React from "react";

const Search = ({ search, onChange, onSubmit }) => {
  return (
    <div className="search container">
      <div className="d-flex justify-content-center">
        <form className="searchbar" onSubmit={onSubmit}>
          <input
            className="search_input"
            value={search}
            onChange={onChange}
            placeholder="Search..."
          />
          <button className="search_icon">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
