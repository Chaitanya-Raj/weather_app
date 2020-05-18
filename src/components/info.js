import React from "react";

const Info = ({ weather, onToggle }) => {
  if (weather)
    return (
      <div id="info">
        {/* <div id="switch-box">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div> */}
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
          <p>Temperature: {weather.main.temp}&#176;C</p>
          <p>Feels like: {weather.main.feels_like}&#176;C</p>
          <p>Humidity: {weather.main.humidity} %</p>
        </div>
      </div>
    );
  else return <div id="info">Waiting</div>;
};

export default Info;
