import { useState } from "react";

export const Mid = (props) => {
  const { temp, searched, humidity, imgCurrentWeather, colorday } = props;
  const [clase, setClase] = useState();

  const color = ["255, 255, 255, 0.6", "0, 0, 0, 0.2"];

  return (
    <div>
      {!searched ? (
        <div className="mid-container">
          <h2 className="temp">Temp C°</h2>
          <div className="draw-container-2">Clima</div>
          <h2 className="humidity">Humedad</h2>
        </div>
      ) : (
        <div className="mid-container">
          <div className="temp">
            <h4>Temperatura</h4>
            <h2>{temp}°C</h2>
          </div>
          {/* Programar el cambio de color de fondo automatico*/}
          <div className="draw-container-2">
            <img className="draw" src={imgCurrentWeather} alt="wheaterApi" />
          </div>
          <div className="humidity">
            <h4>Humedad</h4>
            <h2>{humidity}%</h2>
          </div>
        </div>
      )}
    </div>
  );
};
