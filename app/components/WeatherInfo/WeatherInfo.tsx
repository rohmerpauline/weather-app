export interface WeatherInfoProps {}

export const WeatherInfo = ({}: WeatherInfoProps) => {
  return (
    <div className="w-full bg-weather-info bg-bottom bg-cover overflow-hidden rounded-20 px-300 py-1000 h-[286px] flex flex-col justify-between items-center text-center md:flex-row md:text-left">
      <div>
        <div className="preset-4">Berlin, Germany</div>
        <div className="preset-6">Tuesday, Aug 5, 2025</div>
      </div>
      <div className="flex items-center">
        <div className="w-[120px] h-[120px] flex items-center justify-center">SUN</div>
        <div className="preset-1">20°</div>
      </div>
    </div>
  );
};
