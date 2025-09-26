import { DailyForecastContainer } from './components/DailyForecastContainer/DailyForecastContainer';
import { HourlyForecastContainer } from './components/HourlyForecastContainer/HourlyForecastContainer';
import { SearchContainer } from './components/SearchContainer/SearchContainer';
import { WeatherInfoContainer } from './components/WeatherInfoContainer/WeatherInfoContainer';

export default function Home() {
  return (
    <div>
      <h1 className="preset-2 text-center p-800">How's the sky looking today?</h1>
      <div className="flex flex-col gap-400 lg:gap-600">
        <SearchContainer />
        <div className="grid gap-400 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-400 lg:gap-600">
            <WeatherInfoContainer />
            <DailyForecastContainer />
          </div>
          <HourlyForecastContainer />
        </div>
      </div>
    </div>
  );
}
