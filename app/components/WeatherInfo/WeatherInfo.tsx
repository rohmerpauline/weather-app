'use client';
import { useFilters } from '@/app/context/FilterContext';
import { CurrentWeather } from '../WeatherInfoContainer/WeatherInfoContainer';

export interface WeatherInfoProps {
  currentWeather: CurrentWeather;
}

export const WeatherInfo = ({ currentWeather }: WeatherInfoProps) => {
  const { filters } = useFilters();

  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="w-full bg-weather-info bg-bottom bg-cover overflow-hidden rounded-20 px-300 py-1000 h-[286px] flex flex-col justify-between items-center text-center md:flex-row md:text-left">
      <div>
        <div className="preset-4">
          {filters.city?.name}, {filters.city?.country}
        </div>
        <div className="preset-6">{formattedDate}</div>
      </div>
      <div className="flex items-center">
        <div className="w-[120px] h-[120px] flex items-center justify-center">
          <img src={currentWeather.iconPath} alt="" />
        </div>
        <div className="preset-1">{currentWeather.temperature}°</div>
      </div>
    </div>
  );
};
