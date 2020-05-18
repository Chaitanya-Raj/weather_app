import React from "react";
import Search from "./search";
import Info from "./info";

const Widget = ({ search, onChange, onSubmit, weather }) => {
  return (
    <div id="widget">
      <Search search={search} onChange={onChange} onSubmit={onSubmit} />
      <Info weather={weather} />
    </div>
  );
};

export default Widget;
