import React from "react";

const Search = ({ search, onChange, onSubmit }) => {
  return (
    <div className="search container h-100">
      <div className="d-flex justify-content-center h-100">
        <form className="searchbar" onSubmit={onSubmit}>
          <input
            className="search_input"
            value={search}
            onChange={onChange}
            placeholder="Search..."
            tabIndex={1}
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
