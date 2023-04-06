import { useEffect, useState } from "react";
import "./App.css";
import Figure from "./components/Figure";

const NASA_URL = "https://api.nasa.gov/";
const NASA_API_KEY = "nlEtySupmu0WGD2PwyBpxYXcrngbiSNhfmaFjVs2";
const NASA_MARS_URL =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?";

function App() {
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  const [date, setDate] = useState(today);

  const [apod, setApod] = useState([]);

  const [marsData, setMarsData] = useState([]);

  const [selectedApi, setSelectedApi] = useState("APOD-API");

  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };

  useEffect(() => {
    if (date && selectedApi === "APOD-API") {
      const getApod = async () => {
        const response = await fetch(
          `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
        );

        const data = await response.json();
        setApod(data);
      };
      getApod();
    } else if (date && selectedApi === "MARS-API") {
      const getMarsData = async () => {
        const response = await fetch(
          `${NASA_MARS_URL}earth_date=${date}&api_key=${NASA_API_KEY}`
        );
        const mData = await response.json();
        setMarsData(mData);
      };
      getMarsData();
    }
  }, [date, selectedApi]);

  return (
    <div>
      <img
        src="https://res.cloudinary.com/dxxkog06n/image/upload/v1680250621/favicon-192_nklbsc.png"
        alt="NASA Logo"
      ></img>
      <h1>Astronomic picture of the day</h1>
      <span>This picture is from the date: {date}</span>
      <br />
      <br />
      <input
        type="date"
        value={date}
        min="1995-06-16"
        max={today}
        onChange={handleInput}
      />
      <br />

      <br />
      <p>PLEASE, SELECT YOUR DESIRED API:</p>

      <select
        name="select-API"
        value={selectedApi}
        onChange={(e) => setSelectedApi(e.target.value)}
      >
        <option value="APOD-API">APOD API</option>
        <option value="MARS-API">MARS API</option>
      </select>

      {selectedApi === "APOD-API" ? (
        <Figure data={apod} />
      ) : (
        <div>
          <h3>MARS' PICTURE FROM THE EARTH DATE SELECTED:</h3>
          {marsData.photos ? (
            <div>
              {marsData.photos[0] ? (
                <img src={marsData.photos[0].img_src} alt="Mars Photo" />
              ) : (
                <p>-- (No pictures from Mars were taken on that date) --</p>
              )}
            </div>
          ) : (
            <p>-- (No pictures from Mars were taken on that date) --</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
