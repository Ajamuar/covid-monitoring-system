import ICountry from "../../types/ICountry";
import "./index.css";

const CountryStats = ({ countryArray }: { countryArray: Array<ICountry> }) => {
  return (
    <table id="countries">
      <thead>
        <tr>
          <th>Name</th>
          <th>New Confirmed</th>
          <th>Total Confirmed</th>
          <th>New Deaths</th>
          <th>Total Deaths</th>
          <th>New Recovered</th>
          <th>Total Recovered</th>
        </tr>
      </thead>
      <tbody>
        {countryArray.map((country) => {
          return (
            <tr key={country.Country}>
              <td>{country.Country}</td>
              <td>{country.NewConfirmed}</td>
              <td>{country.TotalConfirmed}</td>
              <td>{country.NewDeaths}</td>
              <td>{country.TotalDeaths}</td>
              <td>{country.NewRecovered}</td>
              <td>{country.TotalRecovered}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CountryStats;
