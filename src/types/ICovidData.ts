import ICountry from "./ICountry";
import IGlobal from "./IGlobal";

type ICovidData = {
  ID: string;
  Global: IGlobal;
  Countries: Array<ICountry>;
};

export default ICovidData;
