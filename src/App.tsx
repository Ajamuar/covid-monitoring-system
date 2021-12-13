import "./App.css";
import { useEffect, useState } from "react";

import CountryStats from "./components/CountryStats";
import ErrorMessage from "./components/ErrorMessage";

import GlobalStats from "./components/GlobalStats";
import LoadingSpinner from "./components/LoadingSpinner";
import getCovidData from "./services/api/getCovidData";
import ICovidData from "./types/ICovidData";

function App() {
  const [covidData, setCovidData] = useState<ICovidData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCovidData = () => {
    setLoading(true);
    getCovidData()
      .then((data: ICovidData) => {
        setCovidData(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCovidData();
  }, []);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div className="App">
      {covidData ? (
        <>
          <GlobalStats globalStats={covidData.Global} />
          <CountryStats countryArray={covidData.Countries} />
        </>
      ) : null}
    </div>
  );
}

export default App;
