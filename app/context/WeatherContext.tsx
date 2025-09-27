'use client';
import { createContext, ReactNode, useContext, useState } from 'react';
import { fetchWeather } from '../helpers/fetchWeather';
import { Filters } from './FilterContext';

interface WeatherData {
  elevation: number;
  generationtime_ms: number;
  hourly: {
    apparent_temperature: number[];
    precipitation: number[];
    relativehumidity_2m: number[];
    temperature_2m: number[];
    time: string[];
    weathercode: number[];
    windspeed_10m: number[];
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    apparent_temperature: string;
    precipitation: string;
    windspeed_10m: string;
    relativehumidity_2m: string;
    weathercode: string;
  };
  latitude: string;
  longitude: string;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}

export interface WeatherContextType {
  weatherData: WeatherData | null;
  fetchWeatherData: (_filters: Filters) => Promise<void>;
  isLoading: boolean;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeatherData = async (filters: Filters) => {
    setIsLoading(true);
    const data = await fetchWeather(filters);
    setWeatherData(data);
    setIsLoading(false);
  };

  return (
    <WeatherContext.Provider
      value={{ weatherData, fetchWeatherData, isLoading }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context)
    throw new Error('useWeather must be used within a WeatherProvider');
  return context;
};
