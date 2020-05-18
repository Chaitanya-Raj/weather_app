import React from "react";
import Widget from "./widget";

const Body = ({ search, onChange, onSubmit, onToggle, weather }) => {
  return (
    <div id="body">
      <Widget
        search={search}
        onChange={onChange}
        onSubmit={onSubmit}
        onToggle={onToggle}
        weather={weather}
      />
    </div>
  );
};

export default Body;
