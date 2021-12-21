import React from 'react';
import './Weather.css';
import partialclouds from './assets/partialclouds.png'

interface WeatherData {
  city: string;
  description: string;
  temperature: string;
  winds?: string;
  pressure?: string;
}

function getLocalWeather() {

}

function MyWeatherComponent(props:WeatherData) {
  return (
    <div className="Weather">
      <h1 align="center">Forecast for Today</h1>
      < div align="center"><img height={100} width={100} src={partialclouds} alt='partialclouds' />
        <div align="center" id="weatherDisplay">
        <div align="center">{props.city}</div>
        <div align="center">{props.description}</div>
        <div align="center">{props.temperature}</div>
        </div>
      </div>
    </div>
  );
}

export default MyWeatherComponent;