import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import axios from 'axios';
import CountriesList from './components/CountriesList'; 
import CountryDetails from './components/CountryDetails';  
import Header from './components/Header';


function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFromApi = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries`
      );
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFromApi();
  }, []); 
  <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            loading ? <h1>Loading</h1> : <CountriesList countries={countries} />
          }
        />

        <Route
          path="/countries/:id"
          element={
            loading ? (
              <h1>Loading Selected</h1>
            ) : (
              <CountryDetails countries={countries} />
            )
          }
        />
      </Routes>
    </div>
}

export default App;
