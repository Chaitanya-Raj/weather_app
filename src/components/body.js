import React from "react";
import Widget from "./widget";

const Body = ({ search, onChange, onSubmit, weather }) => {
  return (
    <div id="body">
      <Widget
        search={search}
        onChange={onChange}
        onSubmit={onSubmit}
        weather={weather}
      />
    </div>
  );
};

export default Body;
