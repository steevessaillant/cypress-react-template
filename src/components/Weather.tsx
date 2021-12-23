import React from 'react';
import './Weather.css';
import partialclouds from './assets/partialclouds.png'
//import Card from './Card';

export interface WeatherData {
  city: string;
  description: string;
  temperature: number;
  winds?: string;
  pressure?: string;
}

function getLocalWeather() {

}

function Weather(props: WeatherData) {
  return (
    <div className="center">
      <p>Forecast for Today</p>
      < div><img height={100} width={100} src={partialclouds} alt='partialclouds' />
        <div id="weatherDisplay">
          <div>{props.city}</div>
          <div>{props.description}</div>
          <div>{props.temperature}</div>
        </div>
      </div>
    </div>
  );
}

export default Weather;