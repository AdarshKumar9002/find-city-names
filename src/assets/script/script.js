import "../style/main.css";

import Header from "./header.js";
import GetCountryName from "./get-country-list.js";
import AppendCountryData from "./append-country-data.js";
import GetCityName from "./get-city-list.js";
import AppendCityData from "./append-city-data.js";
import ShowDropdownResult from "./dropdown-result.js";
import CityList from "./append-city-list.js";

class App {
  constructor() {
    this.Header = new Header();
    this.getCountryNames = new GetCountryName();
    this.appendCountryData = new AppendCountryData;
    this.getCityNames = new GetCityName();
    this.appendCityData = new AppendCityData();
    this.card = new ShowDropdownResult();
  }
}

new App();

const a = new CityList();