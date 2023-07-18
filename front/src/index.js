import ReactDOM from "react-dom/client";
import React from "react";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:33140/WeatherForecast",
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return <h1>My ReactJS App from Scratch consuming a .Net 7 Web Api through Windows Authentication</h1>;
};

const root = document.getElementById("app");
ReactDOM.createRoot(root).render(<App />);
