import { getWeatherIconPath } from '@/app/helpers/weather';
import { WeatherCode } from '../HourlyForecastContainer/HourlyForecastContainer';

export interface HourlyForecastCardProps {
  /* The hour of the day to display */
  timeOfDay?: string;
  /* Weather condition code based on a standard weather API */
  weatherCode?: WeatherCode;
  /* The temperature expected for this hour of the day */
  temp?: number;
}

export const HourlyForecastCard = ({ timeOfDay, weatherCode, temp }: HourlyForecastCardProps) => {
  const weatherIconPath = weatherCode !== undefined ? getWeatherIconPath(weatherCode) : undefined;

  const hourValue = timeOfDay
    ? (() => {
        const hour24 = new Date(timeOfDay).getHours();
        const isPM = hour24 >= 12;
        const hour12 = hour24 % 12 || 12;
        return `${hour12} ${isPM ? 'PM' : 'AM'}`;
      })()
    : '';

  return (
    <div className="bg-neutral-700 border border-neutral-600 box-border grid grid-cols-[max-content_auto_max-content] w-full pl-150 pr-200 h-[60px] items-center gap-100 rounded-8">
      {weatherIconPath && <img src={weatherIconPath} alt="Weather icon" width="40" height="40" />}
      {hourValue && <div className="preset-5">{hourValue}</div>}
      {temp && <div className="preset-7">{temp}°</div>}
    </div>
  );
};
