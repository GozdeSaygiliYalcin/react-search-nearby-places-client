import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form";
import Maps from "./components/Maps";

function App() {
  const [latitude, setLatitude] = useState("40.99318");
  const [longitude, setLongitude] = useState("29.10450");
  const [radius, setRadius] = useState("100");

  const [response, setResponse] = useState([]);
  const [isData, setIsData] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = async () => {
      await fetch(
        `http://localhost:8070/location/search?lat=${latitude}&long=${longitude}&r=${radius}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => setResponse(() => data.results));
    };

    data();
    setIsSearched(true);
  };

  useEffect(() => {
    if (response.length) {
      setIsData(true);
      setIsSearched(false);
    } else {
      setIsData(false);
    }
  }, [response]);

  return (
    <div className="App">
      <Header />
      <Form
        latitude={latitude}
        longitude={longitude}
        radius={radius}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        setRadius={setRadius}
        handleSubmit={handleSubmit}
      />
      <Maps isData={isData} response={response} isSearched={isSearched} />

      <Footer />
    </div>
  );
}

export default App;
