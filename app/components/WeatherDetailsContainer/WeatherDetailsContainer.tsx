'use client';
import { useFilters } from '@/app/context/FilterContext';
import { useWeather } from '@/app/context/WeatherContext';
import { WeatherDetailsCard } from '../WeatherDetailsCard/WeatherDetailsCard';
import { CurrentWeather } from '../WeatherInfoContainer/WeatherInfoContainer';

export interface WeatherDetailsProps {
  currentWeather: CurrentWeather;
}

export const WeatherDetailsContainer = ({
  currentWeather,
}: WeatherDetailsProps) => {
  const { filters } = useFilters();
  const { isLoading } = useWeather();

  const displayValue = (value?: string) => (isLoading ? undefined : value);

  return (
    <div className="grid grid-cols-2 gap-200 md:grid-cols-4">
      <WeatherDetailsCard
        label="Feels like"
        value={displayValue(`${currentWeather.feelsLike}°`)}
      />
      <WeatherDetailsCard
        label="Humidity"
        value={displayValue(`${currentWeather.humidity}%`)}
      />
      <WeatherDetailsCard
        label="Wind"
        value={displayValue(
          `${currentWeather.windSpeed} ${filters.windSpeedUnit}`,
        )}
      />
      <WeatherDetailsCard
        label="Precipitation"
        value={displayValue(
          `${currentWeather.precipitation} ${filters.precipitationUnit}`,
        )}
      />
    </div>
  );
};
