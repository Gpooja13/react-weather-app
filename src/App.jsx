import React, { useEffect, useState } from "react";
import "./App.css";
import Waves from "./Waves";
import Search from "./Search";
import Card from "./Card";
import DetailCom from "./DetailCom";

function App() {
  const [curweather, setWeather] = useState({});
  const [text, setText] = useState("");
  const [city, setCity] = useState("Hawaii");

  const gettext = (e) => {
    const name = e.target.value;
    setText(name);
  };

  const getcity = () => {
    if (!text) {
      alert("Enter city name");
    } else {
      setCity(text);
      fetchApi();
      setText("");
  };
}

  const fetchApi = async () => {
    try {
      const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

      const apiData = await fetch(api);
      const data = await apiData.json();
      if (data.name) {
        const { temp, temp_min, temp_max, pressure, humidity } = data.main;
        const { country, sunset, sunrise } = data.sys;
        const { name, timezone } = data;
        const { main } = data.weather[0];
        const { speed, deg } = data.wind;

        const weather = {
          temp,
          temp_min,
          temp_max,
          pressure,
          humidity,
          country,
          sunset,
          sunrise,
          main,
          speed,
          deg,
          name,
          timezone,
        };

        return setWeather(weather);
      } else {
        alert("City not found");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
<<<<<<< HEAD
    fetchApi();
  }, [city]);
=======
   if (city !== "") {
      fetchApi();
    }
  }, []);
>>>>>>> b4508d35edd33306f4eef090d2a556d9b1313a1b

  return (
    <>
      <div className="mainDiv">
        <Search text={text} getcity={getcity} gettext={gettext} />
        <Card curweather={curweather} />
        <Waves />
      </div>
      <DetailCom curweather={curweather} />
    </>
  );
  }

export default App;
