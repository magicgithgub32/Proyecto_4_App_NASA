import { useEffect, useState } from "react";
import "./App.css";
import Figure from "./components/Figure";

const NASA_URL = "https://api.nasa.gov/";
const NASA_API_KEY = "nlEtySupmu0WGD2PwyBpxYXcrngbiSNhfmaFjVs2";
const NASA_MARS_URL =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000";

function App() {
  const today = new Date(Date.now()).toISOString().slice(0, 10); // const [time, setTime] = useState(today);

  const [date, setDate] = useState("");

  const [apod, setApod] = useState("");

  const [marsData, setMarsData] = useState([]);

  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };

  useEffect(() => {
    const getApod = async () => {
      const response = await fetch(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );

      const data = await response.json();
      setApod(data);
    };
    getApod();
  }, [date]);

  console.log(apod); //Este console.log es para ver la data que recibimos.

  useEffect(() => {
    const getMarsData = async () => {
      const response = await fetch(`${NASA_MARS_URL}&api_key=${NASA_API_KEY}`);
      const mData = await response.json();
      setMarsData(mData);
    };
    getMarsData();
  }, []);

  console.log(marsData); //Este console.log es para ver la data que recibimos.

  // const marsImage = marsData.photos.map((photo) => photo.img_src);

  // console.log(marsImage[0]);

  return (
    <div>
      <img src="../public/favicon-192.png"></img>
      <h1>Astronomic picture of the day</h1>
      <span>This picture is from the date: {date}</span>
      <br />
      <input type="date" min="1995-06-16" max={today} onChange={handleInput} />
      {/* {date > today ? (
        <p>
          Not picture generated fof that date yet. Please, choose a date between
          Jun 16, 1995 and today
        </p>
      ) : ( * */}
      <Figure data={apod} />
      <select></select>
      <div>
        {marsData.photos.map((photo) => (
          <img src={photo.img_src} key={photo.id} alt="Mars Photo" />
        ))}
      </div>
    </div>
  );
}

export default App;
