import React from "react";

const Search = ({ search, onChange, onSubmit }) => {
  return (
    <form id="search" onSubmit={onSubmit}>
      <input value={search} onChange={onChange} />
      <button>Search</button>
    </form>
  );
};

export default Search;
