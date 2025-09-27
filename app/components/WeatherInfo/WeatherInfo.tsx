'use client';
import { useFilters } from '@/app/context/FilterContext';
import { useWeather } from '@/app/context/WeatherContext';
import Image from 'next/image';
import { CurrentWeather } from '../WeatherInfoContainer/WeatherInfoContainer';

export interface WeatherInfoProps {
  currentWeather: CurrentWeather;
}

export const WeatherInfo = ({ currentWeather }: WeatherInfoProps) => {
  const { filters } = useFilters();
  const { isLoading } = useWeather();

  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const background = isLoading ? 'bg-neutral-800' : 'bg-weather-info';

  return (
    <div
      className={`w-full ${background} bg-bottom bg-cover overflow-hidden rounded-20 px-300 py-1000 h-[286px] flex flex-col justify-between items-center text-center md:flex-row md:text-left`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-[286px]">
          <Image
            src="/images/icon-loading.svg"
            alt="Loading"
            className="animate-spin"
            width={60}
            height={60}
          />
        </div>
      ) : (
        <>
          <div>
            <div className="preset-4">
              {filters.city?.name}, {filters.city?.country}
            </div>
            <div className="preset-6">{formattedDate}</div>
          </div>
          <div className="flex items-center">
            <div className="items-center justify-center">
              {currentWeather.iconPath && (
                <Image
                  src={currentWeather.iconPath}
                  alt="Forecast icon"
                  width={120}
                  height={120}
                />
              )}
            </div>
            <div className="preset-1">{currentWeather.temperature}°</div>
          </div>
        </>
      )}
    </div>
  );
};
