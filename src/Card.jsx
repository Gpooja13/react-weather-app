import React, { useEffect, useState } from "react";

const Card = ({ curweather }) => {
  const [weathermood, setWeatherMood] = useState("");
  const [time, setTime] = useState("");
  const [curdate, setDate] = useState("");

  const {
    temp,
    temp_min,
    temp_max,
    country,
    main,
    name,
    timezone,
  } = curweather;

  const getDate = () => {
    const date = new Date();
    const utc = date.getTime() - 19800 * 1000;
    const lct = utc + timezone * 1000;
    const ftime = new Date(lct);

    const month = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
    const m = ftime.getMonth();
    const d = ftime.getDate();
    const y = ftime.getFullYear();
    const h = ftime.getHours();
    const mm = ftime.getMinutes();
    const i = h > 12 ? "PM" : "AM";

    setDate(`${month[m]} ${d}, ${y}`);
    setTime(`${h}:${mm} ${i}`);
  };

  const changeIcon = () => {
    if (main) {
      const [hours, minutes] = time.split(":");
      switch (main) {
        case "Clouds":
          setWeatherMood("Images/004-cloud.png");
          break;
        case "Clear":
          setWeatherMood(hours < 18 ? "Images/008-sun.png" : "Images/003-crescent-moon-1.png");
          break;
        case "Haze":
          setWeatherMood("Images/010-haze.png");
          break;
        case "Mist":
          setWeatherMood("Images/010-haze.png");
          break;
        case "Rain":
          setWeatherMood("Images/005-weather-app.png");
          break;
        case "Thunderstorm":
          setWeatherMood("Images/003-storm.png");
          break;
        case "Drizzle":
          setWeatherMood(hours < 18 ? "Images/008-drizzle.png" : "Images/009-drizzle-1.png");
          break;
        case "Snow":
          setWeatherMood("Images/006-snowfall-1.png");
          break;
        case "Fog":
          setWeatherMood("Images/009-fog.png");
          break;
        case "Tornado":
          setWeatherMood("Images/010-tornado.png");
          break;
        default:
          setWeatherMood("Images/009-fog.png");
      }
    }
  };

  useEffect(() => {
    changeIcon();
    getDate();
  }, [time, main, timezone]);

  return (
    <>
      <div className="temp-container">
        <div className="section1 center">
          <div>
            <div className="city-name">
              {name}, <span className="country">{country}</span>
            </div>
            <div className="date">{curdate} | {time}</div>
          </div>
          <img className="weather-img" src={weathermood} alt={main} />
          <div className="weather-desc">{main}</div>
        </div>

        <div className="section2 center">
          <div className="temp-pos">
            <span className="temp">{temp}</span>
            <sup>o</sup>
            <span className="celsius">C</span>
          </div>
          <div className="minmax">
            Min{" "}
            <span>
              {temp_min} <sup>o </sup>
            </span>
            | Max{" "}
            <span>
              {temp_max} <sup>o</sup>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
