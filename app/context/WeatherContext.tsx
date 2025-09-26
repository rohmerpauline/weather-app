'use client';
import { createContext, ReactNode, useContext, useState } from 'react';
import { fetchWeather } from '../helpers/fetchWeather';
import { Filters } from './FilterContext';

export interface WeatherContextType {
  weatherData: any | null;
  fetchWeatherData: (filters: Filters) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weatherData, setWeatherData] = useState<any | null>(null);

  const fetchWeatherData = async (filters: Filters) => {
    const data = await fetchWeather(filters);
    setWeatherData(data);
  };

  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) throw new Error('useWeather must be used within a WeatherProvider');
  return context;
};
