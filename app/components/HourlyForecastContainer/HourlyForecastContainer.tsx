'use client';
import { useWeather } from '@/app/context/WeatherContext';
import { getRoundedHourDate } from '@/app/utils/getRoundedHourDate';
import { useEffect, useState } from 'react';
import { BaseWrapper } from '../BaseWrapper/BaseWrapper';
import { DaysDropDown } from '../DaysDropDown/DaysDropDown';
import { HourlyForecastCard } from '../HourlyForecastCard/HourlyForecastCard';

export interface HourlyForecastContainerProps {}

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

export const HourlyForecastContainer = ({}: HourlyForecastContainerProps) => {
  const [dayHourlyData, setDayHourlyData] = useState<
    { time: string; temperature: number; weatherCode: WeatherCode }[]
  >([]);
  const { weatherData } = useWeather();
  const [selectedDay, setSelectedDay] = useState<string>(new Date().toISOString().slice(0, 10));
  const roundedNow = getRoundedHourDate(new Date());

  useEffect(() => {
    if (!weatherData) return;

    const dailyFiltered = weatherData.hourly.time
      .map((time: string, i: number) => ({
        time,
        temperature: weatherData.hourly.temperature_2m[i],
        weatherCode: weatherData.hourly.weathercode[i],
      }))
      .filter((entry: any) => entry.time.startsWith(selectedDay) && entry.time >= roundedNow);

    setDayHourlyData(dailyFiltered);
  }, [weatherData, selectedDay]);

  return (
    <BaseWrapper>
      <div className="p-300 flex flex-col h-[693px]">
        <div className="flex justify-between items-center mb-200">
          <div className="preset-5">Hourly forecast</div>
          <DaysDropDown selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        </div>
        <div className="flex flex-col gap-200 overflow-y-auto flex-1">
          {dayHourlyData.map((hour) => (
            <div key={hour.time}>
              <HourlyForecastCard
                timeOfDay={hour.time}
                weatherCode={hour.weatherCode}
                temp={hour.temperature}
              />
            </div>
          ))}
        </div>
      </div>
    </BaseWrapper>
  );
};
