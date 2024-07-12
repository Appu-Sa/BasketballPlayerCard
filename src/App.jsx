import { useEffect, useState } from "react";
import player from './player.json';
import imd1 from "./assets/bouncing-circles.svg";
import './app.css';
import BasketballPlayerCard from "./components/BasketballPlayerCard";

function App() {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getapi = async () => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        const response = player;
        setDetails(response);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setHasError(true);
    }
  };

  useEffect(() => {
    getapi();
  }, []);

  console.log("Details:", details);

  return(
    <>
      {isLoading ? (
        <div className="loadcontainer">
          <img src={imd1} alt="" />
        </div>
      ) : hasError ? (
        <div className="loadcontainer">
          <img src={imd2} alt="" />
        </div>
      ) : (
        <BasketballPlayerCard details={details} />
      )}
    </>
  )
}

export default App;