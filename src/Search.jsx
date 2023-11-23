import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ text, gettext, getcity }) => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const currentDateAndTime = () => {
    setInterval(() => {
      const d1 = new Date().toDateString();
      const t1 = new Date().toLocaleTimeString();
      setCurrentDate(d1);
      setCurrentTime(t1);
    }, 1000);
  };

  const enterBtn = (e) => {
    if (e.keyCode === 13) {
      getcity();
    }
  };

  useEffect(() => {
    currentDateAndTime();
  }, []);

  return (
    <>
      <div className="search-bar center">
        <img className="logo" src="Images/005-clouds-and-sun.png" alt="" />
        <div className="title">
          <b>Weather Today</b>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Enter city name"
          value={text}
          onChange={gettext}
          onKeyDown={enterBtn}
        />
        <FontAwesomeIcon
          className="search-btn"
          icon={faMagnifyingGlass}
          onClick={getcity}
        />
        <div className="currentTime center">
          <img className="pin" src="Images/004-location.png" alt=""></img>
          <div>
            <div>IN {currentTime}</div>
            <div>{currentDate}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
