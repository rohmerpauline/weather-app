import { getWeatherIconPath } from '@/app/helpers/weather';
import { BaseWrapper } from '../BaseWrapper/BaseWrapper';

export interface WeatherCardProps {
  /* The day of the week or date to display */
  day: string;
  /* Weather condition code based on a standard weather API */
  weatherCode:
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
  /** Minimum temperature for the day */
  minTemp: number;
  /** Maximum temperature for the day */
  maxTemp: number;
}

export const WeatherCard = ({ day, weatherCode, minTemp, maxTemp }: WeatherCardProps) => {
  const weatherIconPath = getWeatherIconPath(weatherCode);

  return (
    <BaseWrapper>
      <div className="flex flex-col gap-200 px-125 py-200 w-auto">
        <div className="preset-6 text-center">{day}</div>
        <img src={weatherIconPath} className="mx-auto" alt="Weather icon" width="60" height="60" />
        <div className="flex justify-between preset-7">
          <div>{maxTemp}°</div>
          <div>{minTemp}°</div>
        </div>
      </div>
    </BaseWrapper>
  );
};
