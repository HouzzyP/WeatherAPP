import React, { useState } from "react";

export const NavBar = (props) => {
  let imgURLAPI = "https://i.imgur.com/qP3H3Tt.png";

  return (
    <div className="Container-Nav">
      <h1 className="nav-text"> WeatherAPI </h1>
      <a
        className="weatherAPI"
        href="https://www.weatherapi.com/"
        title="Free Weather API"
      >
        <img
          src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
          alt="Weather data by WeatherAPI.com"
          border="0"
        />
      </a>
    </div>
  );
};
