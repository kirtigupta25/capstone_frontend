import React, { useState, useEffect } from 'react';

const ApiKey = "d238ad9f66db9aa586be86c213309a23";

export default function Form() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const fetchWeatherData = async () => {
    if (city && country) {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ApiKey}&units=metric`);
      const data = await response.json();
      if (data.main) {
        setTemperature(data.main.temp);
        setHumidity(data.main.humidity);
      }
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city, country]);

  return (
    <div className="p-16">
      <form className="p-10 max-w-sm mx-auto border-4 border-gray-300 shadow-lg rounded-lg bg-white">
        <div className="mb-5">
          <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
          <input value={city} onChange={handleCity} type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your city" required />
        </div>
        <div className="mb-5">
          <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
          <input value={country} onChange={handleCountry} type="text" id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your country" required />
        </div>
        <div className="mb-5">
          <label htmlFor="temperature" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Temperature</label>
          <input value={temperature} type="text" id="temperature" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Temperature (in Celsius)" readOnly />
        </div>
        <div className="mb-5">
          <label htmlFor="humidity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Humidity</label>
          <input value={humidity} type="text" id="humidity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Humidity (in percentage)" readOnly />
        </div>
        <div className="mb-5">
          <label htmlFor="soil-moisture" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Soil moisture</label>
          <input type="text" id="soil-moisture" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter soil moisture" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  );
}
