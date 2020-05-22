import React from "react";

const Info = ({ weather, checked }) => {
  if (weather) {
    let unit;
    if (checked) unit = "F";
    else unit = "C";
    return (
      <div id="info">
        <div id="icon">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].main}
          />
          <p>{weather.weather[0].description}</p>
        </div>
        <div id="loc">
          {weather.name}
          <sup>{weather.sys.country}</sup>
        </div>
        <div id="temp">
          <p>
            Temperature: {weather.main.temp}&#176;{unit}
          </p>
          <p>
            Feels like: {weather.main.feels_like}&#176;{unit}
          </p>
          <p>Humidity: {weather.main.humidity} %</p>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <i className="fa fa-refresh fa-spin" id="loading"></i>
      </div>
    );
};

export default Info;
