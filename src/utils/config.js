import abi from './Weather.json'

export const contractABI = abi.abi
export const contractAaddress="0x173B5174428DD720D8BdA429c00ADF287C6e7721"
// lat  lon of bracu = 23.780271566116173, 90.40711830099316
const apiParams = {
    api_key: process.env.REACT_APP_WEATHER_API,
    lat: 23.780271566116173, 
    lon: 90.40711830099316

} 

// export const FETCH_WEATHER_DATA = `https://api.openweathermap.org/data/2.5/forecast?lat=${apiParams.lat}&lon=${apiParams.lon}&appid=${apiParams.api_key}&cnt=${5}&units=metric`

export const FETCH_WEATHER_DATA = {
    method: 'GET',
    url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
    params: {lat: apiParams.lat, lon: apiParams.lon},
    headers: {
        'X-RapidAPI-Key': apiParams.api_key,
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
    };
