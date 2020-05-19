import React from "react";

const Toggle = ({ checked, onToggle }) => {
  return (
    <div id="switch-box">
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Toggle;
