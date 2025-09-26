'use client';
import { useWeather } from '@/app/context/WeatherContext';
import { mostFrequent } from '@/app/utils/entity-utils';
import React, { useEffect, useState } from 'react';
import { WeatherCode } from '../HourlyForecastContainer/HourlyForecastContainer';
import { WeatherCard } from '../WeatherCard/WeatherCard';

export interface DailyForecastContainerProps {}

interface DailyWeatherData {
  date: string; // YYYY-MM-DD
  temperatures: number[];
  weatherCodes: WeatherCode[];
}

interface DailyForecastSummary {
  day: string; // short weekday, e.g., "Mon"
  minTemp: number;
  maxTemp: number;
  weatherCode: WeatherCode;
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
    dailyMap[date].weatherCodes.push(hourly.weathercode[idx] as WeatherCode);
  });

  return Object.values(dailyMap).sort((a, b) => (a.date < b.date ? -1 : 1));
};

export const DailyForecastContainer = ({}: DailyForecastContainerProps) => {
  const [dailyForecast, setDailyForecast] = useState<DailyForecastSummary[] | null>(null);
  const { weatherData, isLoading } = useWeather();

  useEffect(() => {
    if (!weatherData) return;
    const dailyMap = aggregateForecastHourlyByDay(weatherData.hourly);

    const newDailyMap = dailyMap.map((el) => ({
      day: new Date(el.date).toLocaleDateString('en-US', { weekday: 'short' }),
      minTemp: Math.min(...el.temperatures),
      maxTemp: Math.max(...el.temperatures),
      weatherCode: mostFrequent(el.weatherCodes) as WeatherCode,
    }));

    setDailyForecast(newDailyMap);
  }, [weatherData]);

  // Fallback placeholder data (7 empty cards)
  const displayData =
    isLoading || !dailyForecast
      ? Array.from({ length: 7 }, () => ({}) as DailyForecastSummary)
      : dailyForecast;

  return (
    <div>
      <h3 className="preset-5 mb-250">Daily Forecast</h3>
      <div className="grid grid-cols-3  md:grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-200">
        {displayData.map((forecast, index) => (
          <React.Fragment key={forecast.day ?? index}>
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
