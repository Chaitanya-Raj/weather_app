import React from "react";
import Search from "./search";
import Info from "./info";
import Toggle from "./toggle";

const Widget = ({ search, onChange, onSubmit, checked, onToggle, weather }) => {
  return (
    <div id="widget">
      <Search search={search} onChange={onChange} onSubmit={onSubmit} />
      <Info weather={weather} checked={checked} />
      <Toggle checked={checked} onToggle={onToggle} />
    </div>
  );
};

export default Widget;
