import React, { useState, useEffect } from "react";
// import { createClient } from "pexels";
import Axios from "axios";
import Header from "./components/header";
import Body from "./components/body";
import "./App.css";

// const PHOTOS_API_KEY = process.env.REACT_APP_PHOTOS_API_KEY;
// const client = createClient(PHOTOS_API_KEY);

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("new delhi");
  const [unit, setUnit] = useState("metric");
  const [checked, setChecked] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${WEATHER_API_KEY}`;

  useEffect(() => {
    Axios.get(url).then((response) => {
      setWeather(response.data);
      // console.log(response.data);
    });
  }, [city, unit, url]);

  // useEffect(() => {
  //   if (weather) {
  //     let query = weather.name;
  //     if (query) {
  //       client.photos.search({ query, per_page: 1 }).then((response) => {
  //         // console.log(response);
  //         if (response.photos.length !== 0) {
  //           document.getElementById(
  //             "body"
  //           ).style.backgroundImage = `url(${response.photos[0].src.landscape})`;
  //         }
  //         // console.log(query);
  //       });
  //     }
  //   }
  // }, [weather]);

  const onSearchChange = (event) => {
    setSearch(event.target.value);
    // console.log(event.target.value);
  };

  const onToggle = (event) => {
    setChecked(!checked);
    // console.log(!checked);
    if (!checked) setUnit("imperial");
    else setUnit("metric");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(search);
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
        checked={checked}
        onToggle={onToggle}
        weather={weather}
      />
    </div>
  );
}

export default App;
