import React, { useContext } from 'react'

// utils
import { WeatherContext } from '../services/WeatherContext'

const WeatherDataContainer = () => {
    const { connectWallet, storeSelectedData, date, setDate, getSavedData, retrievedData } = useContext(WeatherContext)

    const handleDate = (e) => {
        const date = String(e.target.value)
        console.log({ date })
        setDate(date)
    }
    
    return(
        <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <button onClick={ connectWallet }>Connect Wallet</button>
            <button onClick={ storeSelectedData }>Store Weather data of last 16 days</button>
            <br />
            <input type='date' onChange={handleDate}/>
            <button onClick={ getSavedData }>get data</button>

            {
                retrievedData &&
                <h4>Temperature of {date} : <span style={{ color: 'red' }}>{retrievedData / 10}</span></h4>
            }

        </div>
    )
}
export default WeatherDataContainer