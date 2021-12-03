import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function CountriesList({ countriesData }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Make a call to the API for the data
    const fetchData = async () => {
      const response = await axios.get(apiURL);
      const countriesDataFromAPI = response.data;

      setCountries(countriesDataFromAPI);
    };

    fetchData();
  }, []);

  return (
    <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div class="list-group">
        {countries.map((oneCountry) => (
          <Link class="list-group-item list-group-item-action" to={'/' + oneCountry.alpha3Code}>
            <img src={`http://www.geognos.com/api/en/countries/flag/${oneCountry.alpha2Code}.png`} width="50px" alt="flag" />
            <p>{oneCountry.name.common}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;