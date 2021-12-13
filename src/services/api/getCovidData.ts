/**
 * Returns the latest data from the api `https://api.covid19api.com/summary`
 */
const getCovidData = async () => {
  try {
    const data = await fetch("https://api.covid19api.com/summary").then(
      (data) => data.json()
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export default getCovidData;
