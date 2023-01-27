import { useEffect, useState } from "react";
import "./App.css";
import Figure from "./components/Figure";

const NASA_URL = "https://api.nasa.gov/";
const NASA_API_KEY = "nlEtySupmu0WGD2PwyBpxYXcrngbiSNhfmaFjVs2";

function App() {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [time, setTime] = useState(today);

  const [date, setDate] = useState("");

  const [apod, setApod] = useState("");

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

  return (
    <div>
      <img src="../public/favicon-192.png"></img>
      <h1>Astronomic picture of the day</h1>
      <span>This picture is from the date: {date}</span>
      <br />
      <input type="date" onChange={handleInput} />
      <Figure data={apod} />
    </div>
  );
}

export default App;
