import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./components/header";
import Body from "./components/body";
import "./App.css";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const url = `http://api.openweathermap.org/data/2.5/weather?q=New%20Delhi&appid=${API_KEY}&units=metric`;

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState();

  useEffect(() => {
    Axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
  }, []);

  const onSearchChange = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  const onSubmit = (event) => {
    console.log("submit");
    event.preventDefault();
  };

  return (
    <div>
      <Header />
      <Body
        search={search}
        onChange={onSearchChange}
        onSubmit={onSubmit}
        weather={weather}
      />
    </div>
  );
}

export default App;
