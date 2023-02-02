import { useEffect, useState } from "react";
import "./App.css";
import Figure from "./components/Figure";

const NASA_URL = "https://api.nasa.gov/";
const NASA_API_KEY = "nlEtySupmu0WGD2PwyBpxYXcrngbiSNhfmaFjVs2";
const NASA_MARS_URL =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?";

function App() {
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  const [marsDate, setMarsDate] = useState("");

  const [date, setDate] = useState("");

  const [apod, setApod] = useState("");

  const [marsData, setMarsData] = useState([]);

  const [selectedApi, setSelectedApi] = useState("APOD-API");

  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };

  const handleMarsInput = (ev) => {
    setMarsDate(ev.target.value.toLocaleString());
  };

  useEffect(() => {
    if (date) {
      const getApod = async () => {
        const response = await fetch(
          `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
        );

        const data = await response.json();
        setApod(data);
      };
      getApod();
    }
  }, [date]);

  console.log(apod); //Este console.log es para ver la data que recibimos.

  useEffect(() => {
    if (date) {
      const getMarsData = async () => {
        const response = await fetch(
          `${NASA_MARS_URL}earth_date=${date}&api_key=${NASA_API_KEY}`
        );
        const mData = await response.json();
        setMarsData(mData);
      };
      getMarsData();
    }
  }, [date]);

  console.log(marsData); //Este console.log es para ver la data que recibimos.

  return (
    <div>
      <img src="../public/favicon-192.png" alt="NASA Logo"></img>
      <h1>Astronomic picture of the day</h1>
      <span>This picture is from the date: {date}</span>
      <br />
      {/* <span>APOD API</span> */}
      <br />
      <input type="date" min="1995-06-16" max={today} onChange={handleInput} />
      <br />
      {/* <span>MARS API</span>
      <br /> */}
      {/* <input
        type="date"
        min="2012-08-06"
        max={today}
        onChange={handleMarsInput}
      /> */}

      {/* {date > today ? (
        <p>
          Not picture generated for that date yet. Please, choose a date between
          Jun 16, 1995 and today
        </p>
      ) : ( * */}
      <br />
      <p>PLEASE, SELECT YOUR DESIRED API:</p>
      <select
        name="select-API"
        onChange={(e) => setSelectedApi(e.target.value)}
      >
        <option value="APOD-API" selected={selectedApi === "APOD-API"}>
          APOD API
        </option>
        <option value="MARS-API" selected={selectedApi === "MARS-API"}>
          MARS API
        </option>
      </select>

      {selectedApi === "APOD-API" ? (
        <Figure data={apod} />
      ) : (
        <div>
          <h3>MARS' PICTURES FROM THE EARTH DATE SELECTED:</h3>
          {marsData.photos ? (
            marsData.photos.map((photo) => (
              <img src={photo.img_src} key={photo.id} alt="Mars Photo" />
            ))
          ) : (
            <p>-- (No pictures from Mars were taken on that date) --</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
