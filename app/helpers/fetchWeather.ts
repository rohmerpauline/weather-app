import { Filters } from '../context/FilterContext';

export const fetchWeather = async (filters: Filters) => {
  const { city, temperatureUnit, precipitationUnit, windSpeedUnit } = filters;

  if (!city || !city.coord) return null;

  const { lat, lon } = city.coord;

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,apparent_temperature,precipitation,windspeed_10m,relativehumidity_2m,weathercode&m&wind_speed_unit=${windSpeedUnit}&temperature_unit=${temperatureUnit}&precipitation_unit=${precipitationUnit}&format=json`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch weather data');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
};
