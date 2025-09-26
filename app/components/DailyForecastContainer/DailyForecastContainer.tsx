import { WeatherCard } from "../WeatherCard/WeatherCard";

export interface DailyForecastContainerProps {

}

export const DailyForecastContainer = ({}: DailyForecastContainerProps) => {


  return (
    <div>
      <h3 className="preset-5 mb-250">Daily Forecast</h3>
      <div className="grid grid-cols-3  md:grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-200">
        <WeatherCard day="Mon" weatherCode={0} minTemp={15} maxTemp={20} />
        <WeatherCard day="Mon" weatherCode={0} minTemp={15} maxTemp={20} />
        <WeatherCard day="Mon" weatherCode={0} minTemp={15} maxTemp={20} />
        <WeatherCard day="Mon" weatherCode={0} minTemp={15} maxTemp={20} />
        <WeatherCard day="Mon" weatherCode={0} minTemp={15} maxTemp={20} />
        <WeatherCard day="Mon" weatherCode={0} minTemp={15} maxTemp={20} />
        <WeatherCard day="Mon" weatherCode={0} minTemp={15} maxTemp={20} />
      </div>
    </div>
  );
};
