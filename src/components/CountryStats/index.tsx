import "./index.css";

const CountryStats = () => {
  return (
    <table id="countries">
      <tr>
        <th>Name</th>
        <th>New Confirmed</th>
        <th>Total Confirmed</th>
        <th>New Deaths</th>
        <th>Total Deaths</th>
        <th>New Recovered</th>
        <th>Total Recovered</th>
      </tr>
    </table>
  );
};

export default CountryStats;
