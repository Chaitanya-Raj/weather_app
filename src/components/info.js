import React from "react";

const Info = ({ weather }) => {
  if (weather)
    return (
      <div id="info">
        <div id="icon">{weather.weather.icon}</div>
        <div id="temp">{weather.main.temp}&#176;C</div>
        <div id="loc">
          {weather.name}, {weather.sys.country}
        </div>
      </div>
    );
  else return <div id="info">Waiting</div>;
};

export default Info;
