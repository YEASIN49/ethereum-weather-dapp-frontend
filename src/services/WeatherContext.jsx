import React, { useState } from 'react'
import { ethers } from 'ethers'
import axios from 'axios'

// utils
import { contractAaddress, contractABI, FETCH_WEATHER_DATA } from '../utils/config'


// FETCH_WEATHER_DATA

const { ethereum } = window
export const WeatherContext = React.createContext()

const ContractIns = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner() 
    const code = provider.getCode("0x5FbDB2315678afecb367f032d93F642f64180aa3")
    const weatherContract = new ethers.Contract( contractAaddress, contractABI, signer )

    console.log({
        provider,
        signer,
        weatherContract,
        code
    })

    return weatherContract
}  

const getSampleData = async () => {
    return {
        "data": {
            "data": [
                {
                    "moonrise_ts": 1664236686,
                    "wind_cdir": "SSW",
                    "rh": 69,
                    "pres": 1002.8,
                    "high_temp": 33.7,
                    "sunset_ts": 1664279500,
                    "ozone": 267.8,
                    "moon_phase": 0.0303238,
                    "wind_gust_spd": 1.3,
                    "snow_depth": 0,
                    "clouds": 58,
                    "ts": 1664262060,
                    "sunrise_ts": 1664236208,
                    "app_min_temp": 27.1,
                    "wind_spd": 1.1,
                    "pop": 40,
                    "wind_cdir_full": "south-southwest",
                    "moon_phase_lunation": 0.04,
                    "slp": 1003.7,
                    "app_max_temp": 38.6,
                    "valid_date": "2022-09-27",
                    "vis": 22.723,
                    "snow": 0,
                    "dewpt": 24.1,
                    "uv": 0,
                    "weather": {
                        "icon": "c03d",
                        "code": 803,
                        "description": "Broken clouds"
                    },
                    "wind_dir": 213,
                    "max_dhi": null,
                    "clouds_hi": 69,
                    "precip": 1.9375,
                    "low_temp": 26.5,
                    "max_temp": 33.5,
                    "moonset_ts": 1664283129,
                    "datetime": "2022-09-27",
                    "temp": 30.7,
                    "min_temp": 26.1,
                    "clouds_mid": 42,
                    "clouds_low": 35
                },
                {
                    "moonrise_ts": 1664326464,
                    "wind_cdir": "S",
                    "rh": 80,
                    "pres": 1002.6,
                    "high_temp": 32.1,
                    "sunset_ts": 1664365836,
                    "ozone": 262.2,
                    "moon_phase": 0.0796583,
                    "wind_gust_spd": 0.1,
                    "snow_depth": 0,
                    "clouds": 68,
                    "ts": 1664301660,
                    "sunrise_ts": 1664322631,
                    "app_min_temp": 27.7,
                    "wind_spd": 0.1,
                    "pop": 60,
                    "wind_cdir_full": "south",
                    "moon_phase_lunation": 0.07,
                    "slp": 1003.6,
                    "app_max_temp": 39.3,
                    "valid_date": "2022-09-28",
                    "vis": 22.555,
                    "snow": 0,
                    "dewpt": 25.3,
                    "uv": 7.9,
                    "weather": {
                        "icon": "t02d",
                        "code": 201,
                        "description": "Thunderstorm with rain"
                    },
                    "wind_dir": 186,
                    "max_dhi": null,
                    "clouds_hi": 47,
                    "precip": 4.1,
                    "low_temp": 26.8,
                    "max_temp": 32.1,
                    "moonset_ts": 1664371654,
                    "datetime": "2022-09-28",
                    "temp": 29.1,
                    "min_temp": 26.5,
                    "clouds_mid": 23,
                    "clouds_low": 54
                },
                {
                    "moonrise_ts": 1664416356,
                    "wind_cdir": "SSW",
                    "rh": 78,
                    "pres": 1002,
                    "high_temp": 33.4,
                    "sunset_ts": 1664452173,
                    "ozone": 261.1,
                    "moon_phase": 0.151517,
                    "wind_gust_spd": 0.2,
                    "snow_depth": 0,
                    "clouds": 57,
                    "ts": 1664388060,
                    "sunrise_ts": 1664409055,
                    "app_min_temp": 30.4,
                    "wind_spd": 0.2,
                    "pop": 0,
                    "wind_cdir_full": "south-southwest",
                    "moon_phase_lunation": 0.1,
                    "slp": 1003,
                    "app_max_temp": 40.2,
                    "valid_date": "2022-09-29",
                    "vis": 23.799,
                    "snow": 0,
                    "dewpt": 25.3,
                    "uv": 8.6,
                    "weather": {
                        "icon": "c03d",
                        "code": 803,
                        "description": "Broken clouds"
                    },
                    "wind_dir": 194,
                    "max_dhi": null,
                    "clouds_hi": 46,
                    "precip": 0,
                    "low_temp": 27.1,
                    "max_temp": 33.4,
                    "moonset_ts": 1664460416,
                    "datetime": "2022-09-29",
                    "temp": 29.8,
                    "min_temp": 26.8,
                    "clouds_mid": 20,
                    "clouds_low": 38
                },
                {
                    "moonrise_ts": 1664506405,
                    "wind_cdir": "SW",
                    "rh": 72,
                    "pres": 1001.8,
                    "high_temp": 35.4,
                    "sunset_ts": 1664538510,
                    "ozone": 265.6,
                    "moon_phase": 0.24309,
                    "wind_gust_spd": 0.3,
                    "snow_depth": 0,
                    "clouds": 39,
                    "ts": 1664474460,
                    "sunrise_ts": 1664495478,
                    "app_min_temp": 31.4,
                    "wind_spd": 0.3,
                    "pop": 0,
                    "wind_cdir_full": "southwest",
                    "moon_phase_lunation": 0.14,
                    "slp": 1002.8,
                    "app_max_temp": 42.1,
                    "valid_date": "2022-09-30",
                    "vis": 24.128,
                    "snow": 0,
                    "dewpt": 25,
                    "uv": 7.5,
                    "weather": {
                        "icon": "c02d",
                        "code": 802,
                        "description": "Scattered clouds"
                    },
                    "wind_dir": 235,
                    "max_dhi": null,
                    "clouds_hi": 48,
                    "precip": 0,
                    "low_temp": 27.6,
                    "max_temp": 35.4,
                    "moonset_ts": 1664549510,
                    "datetime": "2022-09-30",
                    "temp": 31,
                    "min_temp": 27.1,
                    "clouds_mid": 3,
                    "clouds_low": 22
                },
                {
                    "moonrise_ts": 1664596622,
                    "wind_cdir": "WSW",
                    "rh": 74,
                    "pres": 1000.9,
                    "high_temp": 34.1,
                    "sunset_ts": 1664624847,
                    "ozone": 269.6,
                    "moon_phase": 0.35006,
                    "wind_gust_spd": 0.5,
                    "snow_depth": 0,
                    "clouds": 58,
                    "ts": 1664560860,
                    "sunrise_ts": 1664581902,
                    "app_min_temp": 32.6,
                    "wind_spd": 0.5,
                    "pop": 0,
                    "wind_cdir_full": "west-southwest",
                    "moon_phase_lunation": 0.17,
                    "slp": 1001.8,
                    "app_max_temp": 42.3,
                    "valid_date": "2022-10-01",
                    "vis": 23.429,
                    "snow": 0,
                    "dewpt": 25.4,
                    "uv": 6.6,
                    "weather": {
                        "icon": "c03d",
                        "code": 803,
                        "description": "Broken clouds"
                    },
                    "wind_dir": 242,
                    "max_dhi": null,
                    "clouds_hi": 86,
                    "precip": 0,
                    "low_temp": 27.8,
                    "max_temp": 34.1,
                    "moonset_ts": 1664639008,
                    "datetime": "2022-10-01",
                    "temp": 30.7,
                    "min_temp": 27.6,
                    "clouds_mid": 41,
                    "clouds_low": 11
                },
                {
                    "moonrise_ts": 1664686958,
                    "wind_cdir": "ESE",
                    "rh": 82,
                    "pres": 1000.6,
                    "high_temp": 31.5,
                    "sunset_ts": 1664711184,
                    "ozone": 261.3,
                    "moon_phase": 0.466722,
                    "wind_gust_spd": 0.4,
                    "snow_depth": 0,
                    "clouds": 81,
                    "ts": 1664647260,
                    "sunrise_ts": 1664668326,
                    "app_min_temp": 32.8,
                    "wind_spd": 0.4,
                    "pop": 80,
                    "wind_cdir_full": "east-southeast",
                    "moon_phase_lunation": 0.21,
                    "slp": 1001.6,
                    "app_max_temp": 39.6,
                    "valid_date": "2022-10-02",
                    "vis": 21.247,
                    "snow": 0,
                    "dewpt": 25.8,
                    "uv": 8.2,
                    "weather": {
                        "icon": "t02d",
                        "code": 201,
                        "description": "Thunderstorm with rain"
                    },
                    "wind_dir": 122,
                    "max_dhi": null,
                    "clouds_hi": 93,
                    "precip": 10.5,
                    "low_temp": 27.7,
                    "max_temp": 31.5,
                    "moonset_ts": 1664728922,
                    "datetime": "2022-10-02",
                    "temp": 29.3,
                    "min_temp": 27.8,
                    "clouds_mid": 70,
                    "clouds_low": 10
                },
                {
                    "moonrise_ts": 1664777284,
                    "wind_cdir": "SE",
                    "rh": 80,
                    "pres": 1001.8,
                    "high_temp": 31.7,
                    "sunset_ts": 1664797522,
                    "ozone": 261.5,
                    "moon_phase": 0.586259,
                    "wind_gust_spd": 0.6,
                    "snow_depth": 0,
                    "clouds": 78,
                    "ts": 1664733660,
                    "sunrise_ts": 1664754751,
                    "app_min_temp": 32.5,
                    "wind_spd": 0.6,
                    "pop": 0,
                    "wind_cdir_full": "southeast",
                    "moon_phase_lunation": 0.24,
                    "slp": 1002.8,
                    "app_max_temp": 38.6,
                    "valid_date": "2022-10-03",
                    "vis": 21.66,
                    "snow": 0,
                    "dewpt": 25.4,
                    "uv": 8.7,
                    "weather": {
                        "icon": "c04d",
                        "code": 804,
                        "description": "Overcast clouds"
                    },
                    "wind_dir": 130,
                    "max_dhi": null,
                    "clouds_hi": 58,
                    "precip": 0,
                    "low_temp": 27.5,
                    "max_temp": 31.7,
                    "moonset_ts": 1664819169,
                    "datetime": "2022-10-03",
                    "temp": 29.4,
                    "min_temp": 27.7,
                    "clouds_mid": 62,
                    "clouds_low": 27
                },
                {
                    "moonrise_ts": 1664867428,
                    "wind_cdir": "ESE",
                    "rh": 80,
                    "pres": 1002.9,
                    "high_temp": 32.2,
                    "sunset_ts": 1664883860,
                    "ozone": 259,
                    "moon_phase": 0.70128,
                    "wind_gust_spd": 0.8,
                    "snow_depth": 0,
                    "clouds": 78,
                    "ts": 1664820060,
                    "sunrise_ts": 1664841175,
                    "app_min_temp": 32.2,
                    "wind_spd": 0.8,
                    "pop": 0,
                    "wind_cdir_full": "east-southeast",
                    "moon_phase_lunation": 0.27,
                    "slp": 1003.9,
                    "app_max_temp": 39.2,
                    "valid_date": "2022-10-04",
                    "vis": 23.636,
                    "snow": 0,
                    "dewpt": 25.5,
                    "uv": 8.6,
                    "weather": {
                        "icon": "c04d",
                        "code": 804,
                        "description": "Overcast clouds"
                    },
                    "wind_dir": 123,
                    "max_dhi": null,
                    "clouds_hi": 67,
                    "precip": 0,
                    "low_temp": 26.8,
                    "max_temp": 32.2,
                    "moonset_ts": 1664823183,
                    "datetime": "2022-10-04",
                    "temp": 29.4,
                    "min_temp": 27.5,
                    "clouds_mid": 26,
                    "clouds_low": 23
                },
                {
                    "moonrise_ts": 1664957235,
                    "wind_cdir": "ESE",
                    "rh": 83,
                    "pres": 1002.6,
                    "high_temp": 30.5,
                    "sunset_ts": 1664970199,
                    "ozone": 257.9,
                    "moon_phase": 0.804566,
                    "wind_gust_spd": 0.9,
                    "snow_depth": 0,
                    "clouds": 84,
                    "ts": 1664906460,
                    "sunrise_ts": 1664927600,
                    "app_min_temp": 30.1,
                    "wind_spd": 0.9,
                    "pop": 0,
                    "wind_cdir_full": "east-southeast",
                    "moon_phase_lunation": 0.31,
                    "slp": 1003.6,
                    "app_max_temp": 36.6,
                    "valid_date": "2022-10-05",
                    "vis": 24.128,
                    "snow": 0,
                    "dewpt": 25.1,
                    "uv": 8.5,
                    "weather": {
                        "icon": "c04d",
                        "code": 804,
                        "description": "Overcast clouds"
                    },
                    "wind_dir": 111,
                    "max_dhi": null,
                    "clouds_hi": 51,
                    "precip": 0,
                    "low_temp": 26.4,
                    "max_temp": 30.5,
                    "moonset_ts": 1664913592,
                    "datetime": "2022-10-05",
                    "temp": 28.2,
                    "min_temp": 26.8,
                    "clouds_mid": 12,
                    "clouds_low": 7
                },
                {
                    "moonrise_ts": 1665046644,
                    "wind_cdir": "SE",
                    "rh": 83,
                    "pres": 1006.1,
                    "high_temp": 30.5,
                    "sunset_ts": 1665056538,
                    "ozone": 256.3,
                    "moon_phase": 0.889839,
                    "wind_gust_spd": 0.7,
                    "snow_depth": 0,
                    "clouds": 82,
                    "ts": 1664992860,
                    "sunrise_ts": 1665014025,
                    "app_min_temp": 27.4,
                    "wind_spd": 0.7,
                    "pop": 0,
                    "wind_cdir_full": "southeast",
                    "moon_phase_lunation": 0.34,
                    "slp": 1007,
                    "app_max_temp": 36,
                    "valid_date": "2022-10-06",
                    "vis": 21.413,
                    "snow": 0,
                    "dewpt": 24.9,
                    "uv": 8.5,
                    "weather": {
                        "icon": "c04d",
                        "code": 804,
                        "description": "Overcast clouds"
                    },
                    "wind_dir": 131,
                    "max_dhi": null,
                    "clouds_hi": 94,
                    "precip": 0,
                    "low_temp": 26.2,
                    "max_temp": 30.5,
                    "moonset_ts": 1665003884,
                    "datetime": "2022-10-06",
                    "temp": 28.1,
                    "min_temp": 26.4,
                    "clouds_mid": 69,
                    "clouds_low": 32
                },
                {
                    "moonrise_ts": 1665135681,
                    "wind_cdir": "SE",
                    "rh": 82,
                    "pres": 1006.5,
                    "high_temp": 30.5,
                    "sunset_ts": 1665142877,
                    "ozone": 258.7,
                    "moon_phase": 0.95234,
                    "wind_gust_spd": 0.7,
                    "snow_depth": 0,
                    "clouds": 81,
                    "ts": 1665079260,
                    "sunrise_ts": 1665100451,
                    "app_min_temp": 27.3,
                    "wind_spd": 0.7,
                    "pop": 0,
                    "wind_cdir_full": "southeast",
                    "moon_phase_lunation": 0.38,
                    "slp": 1007.5,
                    "app_max_temp": 35.8,
                    "valid_date": "2022-10-07",
                    "vis": 14.737,
                    "snow": 0,
                    "dewpt": 24.6,
                    "uv": 8.4,
                    "weather": {
                        "icon": "c04d",
                        "code": 804,
                        "description": "Overcast clouds"
                    },
                    "wind_dir": 131,
                    "max_dhi": null,
                    "clouds_hi": 87,
                    "precip": 0,
                    "low_temp": 24.4,
                    "max_temp": 30.5,
                    "moonset_ts": 1665094024,
                    "datetime": "2022-10-07",
                    "temp": 28.1,
                    "min_temp": 26.2,
                    "clouds_mid": 99,
                    "clouds_low": 50
                },
                {
                    "moonrise_ts": 1665224425,
                    "wind_cdir": "NE",
                    "rh": 74,
                    "pres": 1005,
                    "high_temp": 32.4,
                    "sunset_ts": 1665229217,
                    "ozone": 258,
                    "moon_phase": 0.989176,
                    "wind_gust_spd": 3.3,
                    "snow_depth": 0,
                    "clouds": 51,
                    "ts": 1665165660,
                    "sunrise_ts": 1665186876,
                    "app_min_temp": 25.3,
                    "wind_spd": 2.5,
                    "pop": 10,
                    "wind_cdir_full": "northeast",
                    "moon_phase_lunation": 0.41,
                    "slp": 1005.8,
                    "app_max_temp": 36.6,
                    "valid_date": "2022-10-08",
                    "vis": 24.128,
                    "snow": 0,
                    "dewpt": 22.8,
                    "uv": 8.3,
                    "weather": {
                        "icon": "c03d",
                        "code": 803,
                        "description": "Broken clouds"
                    },
                    "wind_dir": 40,
                    "max_dhi": null,
                    "clouds_hi": 53,
                    "precip": 0.25,
                    "low_temp": 26.9,
                    "max_temp": 32.4,
                    "moonset_ts": 1665184033,
                    "datetime": "2022-10-08",
                    "temp": 28.4,
                    "min_temp": 24.1,
                    "clouds_mid": 51,
                    "clouds_low": 2
                },
                {
                    "moonrise_ts": 1665312972,
                    "wind_cdir": "N",
                    "rh": 65,
                    "pres": 1004.8,
                    "high_temp": 33.4,
                    "sunset_ts": 1665315558,
                    "ozone": 257.9,
                    "moon_phase": 0.999452,
                    "wind_gust_spd": 2.8,
                    "snow_depth": 0,
                    "clouds": 3,
                    "ts": 1665252060,
                    "sunrise_ts": 1665273302,
                    "app_min_temp": 29.4,
                    "wind_spd": 2.6,
                    "pop": 20,
                    "wind_cdir_full": "north",
                    "moon_phase_lunation": 0.44,
                    "slp": 1005.8,
                    "app_max_temp": 37.8,
                    "valid_date": "2022-10-09",
                    "vis": 24.128,
                    "snow": 0,
                    "dewpt": 22.6,
                    "uv": 8.4,
                    "weather": {
                        "icon": "c02d",
                        "code": 801,
                        "description": "Few clouds"
                    },
                    "wind_dir": 8,
                    "max_dhi": null,
                    "clouds_hi": 5,
                    "precip": 0.125,
                    "low_temp": 28.1,
                    "max_temp": 33.4,
                    "moonset_ts": 1665273958,
                    "datetime": "2022-10-09",
                    "temp": 30.2,
                    "min_temp": 25.7,
                    "clouds_mid": 3,
                    "clouds_low": 0
                },
                {
                    "moonrise_ts": 1665401414,
                    "wind_cdir": "ENE",
                    "rh": 64,
                    "pres": 1006.3,
                    "high_temp": 34.6,
                    "sunset_ts": 1665401899,
                    "ozone": 258.3,
                    "moon_phase": 0.999452,
                    "wind_gust_spd": 2.2,
                    "snow_depth": 0,
                    "clouds": 10,
                    "ts": 1665338460,
                    "sunrise_ts": 1665359729,
                    "app_min_temp": 31.8,
                    "wind_spd": 1.6,
                    "pop": 0,
                    "wind_cdir_full": "east-northeast",
                    "moon_phase_lunation": 0.48,
                    "slp": 1007.3,
                    "app_max_temp": 40.6,
                    "valid_date": "2022-10-10",
                    "vis": 24.128,
                    "snow": 0,
                    "dewpt": 23.4,
                    "uv": 8.2,
                    "weather": {
                        "icon": "c02d",
                        "code": 801,
                        "description": "Few clouds"
                    },
                    "wind_dir": 74,
                    "max_dhi": null,
                    "clouds_hi": 25,
                    "precip": 0,
                    "low_temp": 27.4,
                    "max_temp": 34.6,
                    "moonset_ts": 1665360358,
                    "datetime": "2022-10-10",
                    "temp": 31.4,
                    "min_temp": 26.9,
                    "clouds_mid": 2,
                    "clouds_low": 8
                },
                {
                    "moonrise_ts": 1665489836,
                    "wind_cdir": "SSE",
                    "rh": 75,
                    "pres": 1006.3,
                    "high_temp": 30.5,
                    "sunset_ts": 1665488240,
                    "ozone": 255.4,
                    "moon_phase": 0.98417,
                    "wind_gust_spd": 5.1,
                    "snow_depth": 0,
                    "clouds": 99,
                    "ts": 1665424860,
                    "sunrise_ts": 1665446155,
                    "app_min_temp": 31.4,
                    "wind_spd": 3.2,
                    "pop": 85,
                    "wind_cdir_full": "south-southeast",
                    "moon_phase_lunation": 0.51,
                    "slp": 1007.3,
                    "app_max_temp": 34.5,
                    "valid_date": "2022-10-11",
                    "vis": 24.128,
                    "snow": 0,
                    "dewpt": 23.7,
                    "uv": 8.2,
                    "weather": {
                        "icon": "t03d",
                        "code": 202,
                        "description": "Thunderstorm with heavy rain"
                    },
                    "wind_dir": 161,
                    "max_dhi": null,
                    "clouds_hi": 68,
                    "precip": 15.6875,
                    "low_temp": 27.1,
                    "max_temp": 30.5,
                    "moonset_ts": 1665450246,
                    "datetime": "2022-10-11",
                    "temp": 29,
                    "min_temp": 25.3,
                    "clouds_mid": 99,
                    "clouds_low": 2
                },
                {
                    "moonrise_ts": 1665578315,
                    "wind_cdir": "SSE",
                    "rh": 72,
                    "pres": 1005.3,
                    "high_temp": 31.8,
                    "sunset_ts": 1665574583,
                    "ozone": 253.6,
                    "moon_phase": 0.945883,
                    "wind_gust_spd": 4.4,
                    "snow_depth": 0,
                    "clouds": 25,
                    "ts": 1665511260,
                    "sunrise_ts": 1665532583,
                    "app_min_temp": 30.1,
                    "wind_spd": 3.2,
                    "pop": 30,
                    "wind_cdir_full": "south-southeast",
                    "moon_phase_lunation": 0.54,
                    "slp": 1006.3,
                    "app_max_temp": 36.6,
                    "valid_date": "2022-10-12",
                    "vis": 24.128,
                    "snow": 0,
                    "dewpt": 23.4,
                    "uv": 8.1,
                    "weather": {
                        "icon": "c02d",
                        "code": 802,
                        "description": "Scattered clouds"
                    },
                    "wind_dir": 160,
                    "max_dhi": null,
                    "clouds_hi": 100,
                    "precip": 1.25,
                    "low_temp": 26.8,
                    "max_temp": 31.8,
                    "moonset_ts": 1665540131,
                    "datetime": "2022-10-12",
                    "temp": 29.4,
                    "min_temp": 25.4,
                    "clouds_mid": 6,
                    "clouds_low": 12
                }
            ],
            "city_name": "Paltan",
            "lon": 90.4071,
            "timezone": "Asia/Dhaka",
            "lat": 23.7803,
            "country_code": "BD",
            "state_code": "81"
        },
        "status": 200,
        "statusText": "",
        "headers": {
            "content-type": "application/json; charset=utf-8"
        },
        "config": {
            "transitional": {
                "silentJSONParsing": true,
                "forcedJSONParsing": true,
                "clarifyTimeoutError": false
            },
            "transformRequest": [
                null
            ],
            "transformResponse": [
                null
            ],
            "timeout": 0,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "maxBodyLength": -1,
            "env": {
                "FormData": null
            },
            "headers": {
                "Accept": "application/json, text/plain, */*",
                "X-RapidAPI-Key": "93a0840576msh507c505b4a18cbdp1aa5a5jsnbd80304e1267",
                "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com"
            },
            "method": "get",
            "url": "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily",
            "params": {
                "lat": 23.780271566116173,
                "lon": 90.40711830099316
            }
        },
        "request": {}
    }
}

export const WeatherContextProvider = ({ children }) => {
    const [connectedMetaWallet, setConnectedMetaWallet] = useState('')
    const [date, setDate] = useState('')
    const [retrievedData, setRetrievedData] = useState('')

    // connecting wallet
    const connectWallet = async () => {
        try {
            // if no ethereum global object found
            if (!ethereum){
                return alert("Please Add any crypto wallet as browser extention.")
            } 
            const accounts = await ethereum.request({ method: "eth_requestAccounts", });
            // if connected account list found
            if(accounts?.length > 0){
                setConnectedMetaWallet(accounts[0])
                return
            }
            alert("Failed to connect");

        } catch (error) {
          console.error(error);
        }
      }

      //store data
      const storeSelectedData = async () => {
        const weatherrContractIns = ContractIns()

        // getSampleData()
        axios.request(FETCH_WEATHER_DATA)
        .then( async (res)  => {
            console.log({ res })
            const weatherData = res?.data?.data

            const maxTemp = []
            const dailyDate = []
            weatherData?.forEach(element => {
                const date = String(element?.valid_date)
                const temp = Number(element?.app_max_temp)*10
                maxTemp.push(temp)
                dailyDate.push(date)
            })
            const transactionHash = await weatherrContractIns.storeData(maxTemp, dailyDate);
            return {maxTemp, dailyDate}
        })
        .then(res => {
            console.log({ res })
            alert('task Successfull')
        })
        .catch(err => {
            console.error(err)
        })

        // const transactionHash = await weatherrContractIns.storeData(date);
        // console.log({ transactionHash })
    }


    // get stored data
    const getSavedData = async () => {
        try {
            const weatherrContractIns = ContractIns()
            // const code = await weatherrContractIns.getCode(address);
            // if (code !== '0x') return true

            const transactionHash = await weatherrContractIns.getData(date);
            const transformToNormalNumber = ethers.BigNumber.from(transactionHash).toNumber()
            console.log({ transformToNormalNumber })
            setRetrievedData( transformToNormalNumber )
            alert('task Successfull')
            
        } catch (err) {
            console.error(err)
        }
	}
    
    return(
        <WeatherContext.Provider value={{ connectWallet, storeSelectedData, date, setDate, getSavedData, retrievedData }}>
            {
                children
            }
        </WeatherContext.Provider>
    )
}