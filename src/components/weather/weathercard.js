import React, { useState, useEffect } from 'react'

const Weathercard = ({ tempInfo }) => {

    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo
    const [weatherState, setWeatherState] = useState("")

    useEffect(() => {
        if(weathermood){
            switch(weathermood){
                case "Clouds":
                    setWeatherState("wi-day-cloudy")
                    break;
                case "Haze":
                    setWeatherState("wi-fog")
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny")
                    break;
                default:
                    setWeatherState("wi-day-sunny")
                    break;
            }
        }
    }, [weathermood])

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`

    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={"wi wi-day-sunny"}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">
                            sunny
                        </div>
                        <div className="place">
                            {name}, {country}
                        </div>
                    </div>
                </div>

                <div className="date">{new Date().toLocaleString()}</div>

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {timeStr}
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity}
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-pressure"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure}
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-strong-wind">
                                {speed}
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Weathercard
