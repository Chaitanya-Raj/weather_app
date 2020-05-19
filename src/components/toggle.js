import React from "react";

const Toggle = ({ checked, onToggle }) => {
  return (
    <div id="switch-box">
      <label class="switch">
        <input type="checkbox" checked={checked} onChange={onToggle} />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default Toggle;
