import "./index.css";

const GlobalStats = () => {
  return (
    <div className="global-stats-container">
      <h1 className="stats main-stat">Total Cases: 732000</h1>
      <br />

      <div className="stats">
        <div className="divided-stats-section">
          <h2>
            Total Recovered: <span className="good-news">55000</span>
          </h2>
          <h2>
            New Recovered: <span className="good-news">55000</span>
          </h2>
        </div>
        <div className="divided-stats-section">
          <h2>
            Total Deaths: <span className="bad-news">55000</span>
          </h2>
          <h2>
            New Deaths: <span className="bad-news">55000</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default GlobalStats;
