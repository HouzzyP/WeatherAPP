import { useEffect, useState } from "react";
import { Mid } from "./components/information/mid";
import { Top } from "./components/information/top";
import { NavBar } from "./components/navbar";
import { Search } from "./components/Search";
import { getInfo, getIP } from "./getinfo";
import { separateTime } from "./separateTime";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState();
  const [imgCurrentWeather, setimgCurrentWeather] = useState();
  const [colorday, setColorDay] = useState(false);
  const [isDay, setIsDay] = useState();

  useEffect(() => {
    const ipInfo = async () => {
      let data = await getIP();
      console.log(data);
      if (data === undefined) {
        return;
      }
      if (data.city === null) {
        if (data.country_name !== null) {
          showInfo(data.country_name);
        }
      } else {
        showInfo(data.city);
      }
    };

    ipInfo();
  }, []);

  const showInfo = async (prop) => {
    console.log(prop);
    setLoading(true);
    const data = await getInfo(prop);
    if (data !== undefined) {
      let timeArr = separateTime(data.location.localtime);
      setLocation(data.location.name);
      setDay(timeArr[0]);
      setTime(timeArr[1]);
      setSearched(true);
      setLoading(false);
      setTemp(data.current.temp_c);
      setHumidity(data.current.humidity);
      setimgCurrentWeather(data.current.condition.icon);

      let timeSplit = time.split(":");
      if (timeSplit[0] >= 18 || timeSplit[0] <= 7) {
        setColorDay("draw-container-2");
      } else {
        setColorDay("draw-container");
      }
    } else {
      setSearched(false);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <NavBar />
      <Search getInfo={showInfo} search={search} setSearch={setSearch} />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="loading">asdass</div>
      )}

      <div className="container-div-info">
        <div className="container-info">
          <Top
            searched={searched}
            setSearched={setSearched}
            location={location}
            time={time}
            day={day}
          />
          <Mid
            imgCurrentWeather={imgCurrentWeather}
            humidity={humidity}
            temp={temp}
            searched={searched}
            colorday={colorday}
            isDay={isDay}
            setIsDay={setIsDay}
          />
        </div>
      </div>
      <p className="alink">
        Powered by{" "}
        <a
          className="alink"
          href="https://www.weatherapi.com/"
          title="Free Weather API"
        >
          WeatherAPI.com
        </a>
      </p>
    </div>
  );
}
