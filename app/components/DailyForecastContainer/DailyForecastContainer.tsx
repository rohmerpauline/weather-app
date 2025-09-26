'use client';
import { useWeather } from '@/app/context/WeatherContext';
import { mostFrequent } from '@/app/utils/entity-utils';
import React, { useEffect, useState } from 'react';
import { WeatherCard } from '../WeatherCard/WeatherCard';

export interface DailyForecastContainerProps {}

interface DailyWeatherData {
  date: string; // YYYY-MM-DD
  temperatures: number[];
  weatherCodes: number[];
}

interface DailyForecastSummary {
  day: string; // short weekday, e.g., "Mon"
  minTemp: number;
  maxTemp: number;
  weatherCode: number;
}

const aggregateForecastHourlyByDay = (hourly: {
  time: string[];
  temperature_2m: number[];
  weathercode: number[];
}): DailyWeatherData[] => {
  const dailyMap: Record<string, DailyWeatherData> = {};

  hourly.time.forEach((timeStr, idx) => {
    const date = timeStr.split('T')[0];

    if (!dailyMap[date]) {
      dailyMap[date] = { date, temperatures: [], weatherCodes: [] };
    }

    dailyMap[date].temperatures.push(hourly.temperature_2m[idx]);
    dailyMap[date].weatherCodes.push(hourly.weathercode[idx]);
  });

  return Object.values(dailyMap).sort((a, b) => (a.date < b.date ? -1 : 1));
};

export const DailyForecastContainer = ({}: DailyForecastContainerProps) => {
  const [dailyForecast, setDailyForecast] = useState<DailyForecastSummary[] | null>(null);
  const { weatherData } = useWeather();

  useEffect(() => {
    if (!weatherData) return;
    const dailyMap = aggregateForecastHourlyByDay(weatherData.hourly);

    const newDailyMap = dailyMap.map((el) => ({
      day: new Date(el.date).toLocaleDateString('en-US', { weekday: 'short' }),
      minTemp: Math.min(...el.temperatures),
      maxTemp: Math.max(...el.temperatures),
      weatherCode: mostFrequent(el.weatherCodes),
    }));

    setDailyForecast(newDailyMap);
  }, [weatherData]);

  return (
    <div>
      <h3 className="preset-5 mb-250">Daily Forecast</h3>
      <div className="grid grid-cols-3  md:grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-200">
        {dailyForecast?.map((forecast: any) => (
          <React.Fragment key={forecast.day}>
            <WeatherCard
              day={forecast.day}
              weatherCode={forecast.weatherCode}
              minTemp={forecast.minTemp}
              maxTemp={forecast.maxTemp}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
