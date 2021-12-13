import IGlobal from "../../types/IGlobal";
import "./index.css";

const GlobalStats = ({ globalStats }: { globalStats: IGlobal | undefined }) => {
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
    </div>
  );
};

export default GlobalStats;
