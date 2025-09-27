'use client';
import { useWeather } from '@/app/context/WeatherContext';
import { getWeatherIconPath } from '@/app/helpers/weather';
import { getRoundedHourDate } from '@/app/utils/getRoundedHourDate';
import { useEffect, useState } from 'react';
import { WeatherDetailsContainer } from '../WeatherDetailsContainer/WeatherDetailsContainer';
import { WeatherInfo } from '../WeatherInfo/WeatherInfo';

export interface CurrentWeather {
  temperature: null | number;
  feelsLike: null | number;
  windSpeed: null | number;
  precipitation: null | number;
  humidity: null | number;
  iconPath: undefined | string;
}

export const WeatherInfoContainer = () => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>({
    temperature: null,
    feelsLike: null,
    windSpeed: null,
    precipitation: null,
    humidity: null,
    iconPath: undefined,
  });
  const { weatherData } = useWeather();

  useEffect(() => {
    if (!weatherData) return;

    const roundedNow = getRoundedHourDate(new Date());
    const roundedNowIndex = weatherData.hourly?.time?.findIndex(
      (time: string) => time === roundedNow,
    );

    if (roundedNowIndex >= 0) {
      setCurrentWeather({
        temperature: weatherData.hourly.temperature_2m[roundedNowIndex],
        feelsLike: weatherData.hourly.apparent_temperature[roundedNowIndex],
        windSpeed: weatherData.hourly.windspeed_10m[roundedNowIndex],
        precipitation: weatherData.hourly.precipitation[roundedNowIndex],
        humidity: weatherData.hourly.relativehumidity_2m[roundedNowIndex],
        iconPath: getWeatherIconPath(
          weatherData.hourly.weathercode[roundedNowIndex],
        ),
      });
    }
  }, [weatherData]);

  return (
    <div className="flex flex-col gap-250">
      <WeatherInfo currentWeather={currentWeather} />
      <WeatherDetailsContainer currentWeather={currentWeather} />
    </div>
  );
};
