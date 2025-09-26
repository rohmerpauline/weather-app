import { WeatherDetailsCard } from '../WeatherDetailsCard/WeatherDetailsCard';

export interface WeatherDetailsProps {}

export const WeatherDetailsContainer = ({}: WeatherDetailsProps) => {
  return (
    <div className="grid grid-cols-2 gap-200 md:grid-cols-4">
      <WeatherDetailsCard label="Feels like" value="18°" />
      <WeatherDetailsCard label="Humidity" value="46%" />
      <WeatherDetailsCard label="Wind" value="14 km/h" />
      <WeatherDetailsCard label="Precipitation" value="0 mm" />
    </div>
  );
};
