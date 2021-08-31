import React, { useState } from "react";

export const Top = (props) => {
  const { searched, location, day, time } = props;
  return (
    <div>
      {!searched ? (
        <div className="top-container">
          <h2 className="City">City name</h2>
          <h3 className="Day">Day</h3>
          <h3 className="Time">Time</h3>
        </div>
      ) : (
        <div className="top-container">
          <h2 className="City">{location}</h2>
          <h3 className="Day">{day}</h3>
          <h3 className="Time">{time}</h3>
        </div>
      )}
    </div>
  );
};
