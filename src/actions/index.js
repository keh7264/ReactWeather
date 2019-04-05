import axios from 'axios';

const API_KEY = 'd653e19ffc6056e794c2ab2e9069789e';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('request', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
