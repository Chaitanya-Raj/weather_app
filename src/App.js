import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./components/header";
import Body from "./components/body";
import "./App.css";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("moscow");
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    Axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
  }, [city, url]);

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(search);
    let x = search.split(" ").join("%20");
    setCity(x);
    setSearch("");
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
