import React from "react";
import Detail from "./Detail";

const DetailCom = ({ curweather }) => {
  const {
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
  } = curweather;

  let sec1 = sunset;
  let sec2 = sunrise;
  let date1 = new Date(sec1 * 1000 - 19800 * 1000 + timezone * 1000);
  let date2 = new Date(sec2 * 1000 - 19800 * 1000 + timezone * 1000);
  let timeset = `${date1.getHours()}:${date1.getMinutes()}`;
  let timerise = `${date2.getHours()}:${date2.getMinutes()}`;

  return (
    <div className="solid-fill">
      <div className="grid-container">
        <div className="item1 details center">
          <Detail
            detail={"Humidity"}
            img={"Images/002-humidity.png"}
            det={humidity}
            unit={"%"}
          />
        </div>
        <div className="details center">
          <Detail
            detail={"Pressure"}
            img={"Images/001-pressure.png"}
            det={pressure}
            unit={"hPa"}
          />
        </div>
        <div className="details center">
          <Detail
            detail={"Wind"}
            img={"Images/003-wind.png"}
            det={speed}
            unit={"m/s"}
          />
        </div>
        <div className="details center">
          <Detail
            detail={"Sunrise"}
            img={"Images/008-sun.png"}
            det={timerise}
            unit={"AM"}
          />
        </div>
        <div className="details center">
          <Detail
            detail={"Sunset"}
            img={"Images/007-sunset.png"}
            det={timeset}
            unit={"PM"}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailCom;
