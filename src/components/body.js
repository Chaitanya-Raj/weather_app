import React from "react";
import Widget from "./widget";

const Body = ({ search, onChange, onSubmit, checked, onToggle, weather }) => {
  return (
    <main id="body">
      <Widget
        search={search}
        onChange={onChange}
        onSubmit={onSubmit}
        checked={checked}
        onToggle={onToggle}
        weather={weather}
      />
    </main>
  );
};

export default Body;
