import "./index.css";
import { useMemo, useState } from "react";
import ICountry from "../../types/ICountry";
import { BiSortAlt2 } from "react-icons/bi";

const CountryStats = ({ countryArray }: { countryArray: Array<ICountry> }) => {
  const [sortingColumnName, setSortingColumnName] =
    useState<keyof ICountry>("Country");
  const [sortingOrder, setSortingOrder] = useState<"Ascending" | "Descending">(
    "Ascending"
  );
  const [searchText, setSearchText] = useState("");

  // Sorted array according to current states
  const sortedArray = useMemo(() => {
    return [...countryArray].sort(function (
      country1: ICountry,
      country2: ICountry
    ) {
      let sortValue1 = country1[sortingColumnName];
      let sortValue2 = country2[sortingColumnName];

      if (sortValue1 < sortValue2) return sortingOrder === "Ascending" ? -1 : 1;
      if (sortValue1 > sortValue2) return sortingOrder === "Ascending" ? 1 : -1;
      return 0;
    });
  }, [countryArray, sortingColumnName, sortingOrder]);

  /**
   * Toggles the current sorting order between `Ascending` and `Descending`
   */
  const toggleSortingOrder = () => {
    if (sortingOrder === "Ascending") setSortingOrder("Descending");
    else setSortingOrder("Ascending");
  };

  /**
   * Sets the sorting order according to the property pas
   *
   * @param propertyName keyof ICountry
   */
  const setSorting = (propertyName: keyof ICountry) => {
    if (sortingColumnName === propertyName) toggleSortingOrder();
    else {
      setSortingColumnName(propertyName);
    }
  };

  const filteredArray = useMemo(() => {
    return sortedArray.filter((country) => {
      let searchTextInLowerCase = searchText.toLowerCase();
      return (
        country.Country.toLowerCase().includes(searchTextInLowerCase) ||
        (country.TotalConfirmed + "").includes(searchTextInLowerCase) ||
        (country.NewConfirmed + "").includes(searchTextInLowerCase) ||
        (country.TotalRecovered + "").includes(searchTextInLowerCase) ||
        (country.NewRecovered + "").includes(searchTextInLowerCase) ||
        (country.TotalDeaths + "").includes(searchTextInLowerCase) ||
        (country.NewDeaths + "").includes(searchTextInLowerCase)
      );
    });
  }, [searchText, sortedArray]);

  return (
    <>
      <div className="search-row">
        <input
          placeholder="Search"
          value={searchText}
          onChange={(event: React.FormEvent<HTMLInputElement>) => {
            setSearchText((event.target as HTMLInputElement).value);
          }}
        />
      </div>
      <div className="table-container">
        <table id="countries">
          <thead>
            <tr>
              <th>
                <div className="th-spacer">
                  Name{" "}
                  <span
                    className="sort-icon"
                    onClick={() => setSorting("Country")}
                  >
                    <BiSortAlt2 />
                  </span>
                </div>
              </th>
              <th>
                <div className="th-spacer">
                  New Confirmed{" "}
                  <span
                    className="sort-icon"
                    onClick={() => setSorting("NewConfirmed")}
                  >
                    <BiSortAlt2 />
                  </span>
                </div>
              </th>
              <th>
                <div className="th-spacer">
                  Total Confirmed{" "}
                  <span
                    className="sort-icon"
                    onClick={() => setSorting("TotalConfirmed")}
                  >
                    <BiSortAlt2 />
                  </span>
                </div>
              </th>
              <th>
                <div className="th-spacer">
                  New Deaths{" "}
                  <span
                    className="sort-icon"
                    onClick={() => setSorting("NewDeaths")}
                  >
                    <BiSortAlt2 />
                  </span>
                </div>
              </th>
              <th>
                <div className="th-spacer">
                  Total Deaths{" "}
                  <span
                    className="sort-icon"
                    onClick={() => setSorting("TotalDeaths")}
                  >
                    <BiSortAlt2 />
                  </span>
                </div>
              </th>
              <th>
                <div className="th-spacer">
                  New Recovered{" "}
                  <span
                    className="sort-icon"
                    onClick={() => setSorting("NewRecovered")}
                  >
                    <BiSortAlt2 />
                  </span>
                </div>
              </th>
              <th>
                <div className="th-spacer">
                  Total Recovered{" "}
                  <span
                    className="sort-icon"
                    onClick={() => setSorting("TotalRecovered")}
                  >
                    <BiSortAlt2 />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredArray.map((country) => {
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
      </div>
    </>
  );
};

export default CountryStats;
