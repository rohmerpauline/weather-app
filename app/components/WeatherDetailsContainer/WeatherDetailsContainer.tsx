'use client';
import { useFilters } from '@/app/context/FilterContext';
import { WeatherDetailsCard } from '../WeatherDetailsCard/WeatherDetailsCard';
import { CurrentWeather } from '../WeatherInfoContainer/WeatherInfoContainer';

export interface WeatherDetailsProps {
  currentWeather: CurrentWeather;
}

export const WeatherDetailsContainer = ({ currentWeather }: WeatherDetailsProps) => {
  const { filters } = useFilters();

  return (
    <div className="grid grid-cols-2 gap-200 md:grid-cols-4">
      <WeatherDetailsCard label="Feels like" value={`${currentWeather.feelsLike}°`} />
      <WeatherDetailsCard label="Humidity" value={`${currentWeather.humidity}%`} />
      <WeatherDetailsCard
        label="Wind"
        value={`${currentWeather.windSpeed} ${filters.windSpeedUnit}`}
      />
      <WeatherDetailsCard
        label="Precipitation"
        value={`${currentWeather.precipitation} ${filters.precipitationUnit}`}
      />
    </div>
  );
};
