import "./index.css";
import IGlobal from "../../types/IGlobal";

import { BiRefresh } from "react-icons/bi";

const GlobalStats = ({
  globalStats,
  fetchCovidData,
  loading,
}: {
  globalStats: IGlobal | undefined;
  fetchCovidData: () => void;
  loading: boolean;
}) => {
  return (
    <div className="global-stats-container">
      <h1 className="stats main-stat">
        Total Cases: {globalStats?.TotalConfirmed}
      </h1>
      <br />

      <div className="stats">
        <div className="divided-stats-section">
          <h2>
            Total Recovered:{" "}
            <span className="good-news">{globalStats?.TotalRecovered}</span>
          </h2>
          <h2>
            New Recovered:{" "}
            <span className="good-news">{globalStats?.NewRecovered}</span>
          </h2>
        </div>
        <div className="divided-stats-section">
          <h2>
            Total Deaths:{" "}
            <span className="bad-news">{globalStats?.TotalDeaths}</span>
          </h2>
          <h2>
            New Deaths:{" "}
            <span className="bad-news">{globalStats?.NewDeaths}</span>
          </h2>
        </div>
      </div>

      <span className="refresh-icon" onClick={() => fetchCovidData()}>
        <BiRefresh
          size={"24px"}
          className={loading ? "refresh-icon-svg" : ""}
        />
      </span>
    </div>
  );
};

export default GlobalStats;
