import React from "react";
export default function WeatherCard({ weather }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <p className="text-xl">{weather.main.temp}°C</p>
      <p className="capitalize">{weather.weather[0].description}</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌬 Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}
