'use client';
import { useState } from 'react';
import { DailyForecastContainer } from './components/DailyForecastContainer/DailyForecastContainer';
import { HourlyForecastContainer } from './components/HourlyForecastContainer/HourlyForecastContainer';
import { SearchContainer } from './components/SearchContainer/SearchContainer';
import { WeatherDetailsContainer } from './components/WeatherDetailsContainer/WeatherDetailsContainer';
import { WeatherInfo } from './components/WeatherInfo/WeatherInfo';

export interface City {
  id: number;
  name: string;
  country: string;
  state: string;
  coord: {
    lon: number;
    lat: number;
  };
}

export default function Home() {
  const [selectedCity, setSelectedCity] = useState('');

  const handleSearchCity = (selectedCity: string) => {
    setSelectedCity(selectedCity);
  };

  return (
    <div>
      <h1 className="preset-2 text-center p-800">How's the sky looking today?</h1>
      <div className="flex flex-col gap-400 lg:gap-600">
        <SearchContainer value={selectedCity} onChange={handleSearchCity} />
        <div className="grid gap-400 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-400 lg:gap-600">
            <div className="flex flex-col gap-250">
              <WeatherInfo />
              <WeatherDetailsContainer />
            </div>
            <DailyForecastContainer />
          </div>
          <HourlyForecastContainer />
        </div>
      </div>
    </div>
  );
}
