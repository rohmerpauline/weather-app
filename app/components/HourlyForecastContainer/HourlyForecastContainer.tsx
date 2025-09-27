'use client';
import { useWeather } from '@/app/context/WeatherContext';
import React, { useEffect, useState } from 'react';
import { BaseWrapper } from '../BaseWrapper/BaseWrapper';
import { DaysDropDown } from '../DaysDropDown/DaysDropDown';
import { HourlyForecastCard } from '../HourlyForecastCard/HourlyForecastCard';

export type WeatherCode =
  | 0
  | 1
  | 2
  | 3
  | 45
  | 48
  | 51
  | 53
  | 55
  | 56
  | 57
  | 61
  | 63
  | 65
  | 66
  | 67
  | 71
  | 73
  | 75
  | 77
  | 80
  | 81
  | 82
  | 85
  | 86
  | 95
  | 96
  | 99;

export const HourlyForecastContainer = () => {
  const [dayHourlyData, setDayHourlyData] = useState<
    { time: string; temperature: number; weatherCode: WeatherCode }[]
  >([]);
  const { weatherData, isLoading } = useWeather();
  const [selectedDay, setSelectedDay] = useState<string>(
    new Date().toISOString().slice(0, 10),
  );

  useEffect(() => {
    if (!weatherData) return;

    const dailyFiltered = weatherData.hourly.time
      .map((time: string, i: number) => ({
        time,
        temperature: weatherData.hourly.temperature_2m[i],
        weatherCode: weatherData.hourly.weathercode[i] as WeatherCode,
      }))
      .filter((entry) => entry.time.startsWith(selectedDay));

    setDayHourlyData(dailyFiltered);
  }, [weatherData, selectedDay]);

  const displayData = isLoading
    ? Array.from({ length: 7 }).map((_) => ({
        time: undefined,
        weatherCode: undefined,
        temperature: undefined,
      }))
    : dayHourlyData;

  return (
    <BaseWrapper>
      <div className="p-300 flex flex-col h-[693px]">
        <div className="flex justify-between items-center mb-200">
          <div className="preset-5">Hourly forecast</div>
          <DaysDropDown
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            isLoading={isLoading}
          />
        </div>
        <div className="overflow-y-auto">
          <div className="flex flex-col gap-200 flex-1">
            {displayData.map((hour, index) => (
              <React.Fragment key={hour.time ?? index}>
                <HourlyForecastCard
                  timeOfDay={hour.time}
                  weatherCode={hour.weatherCode}
                  temp={hour.temperature}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </BaseWrapper>
  );
};
