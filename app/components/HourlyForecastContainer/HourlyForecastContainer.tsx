import { BaseWrapper } from '../BaseWrapper/BaseWrapper';
import { DaysDropDown } from '../DaysDropDown/DaysDropDown';
import { HourlyForecastCard } from '../HourlyForecastCard/HourlyForecastCard';

export interface HourlyForecastContainerProps {}

export const HourlyForecastContainer = ({}: HourlyForecastContainerProps) => {
  return (
    <BaseWrapper>
      <div className="p-300 flex flex-col h-[693px]">
        <div className="flex justify-between items-center mb-200">
          <div className="preset-5">Hourly forecast</div>
          <DaysDropDown />
        </div>
        <div className="flex flex-col gap-200 overflow-y-auto flex-1">
          <HourlyForecastCard timeOfDay="2025-09-24T18:00" weatherCode={1} temp={22} />
          <HourlyForecastCard timeOfDay="2025-09-24T21:00" weatherCode={3} temp={20} />
          <HourlyForecastCard timeOfDay="2025-09-25T00:00" weatherCode={45} temp={18} />
          <HourlyForecastCard timeOfDay="2025-09-25T03:00" weatherCode={48} temp={17} />
          <HourlyForecastCard timeOfDay="2025-09-25T06:00" weatherCode={51} temp={16} />
          <HourlyForecastCard timeOfDay="2025-09-25T09:00" weatherCode={53} temp={18} />
          <HourlyForecastCard timeOfDay="2025-09-25T12:00" weatherCode={55} temp={21} />
          <HourlyForecastCard timeOfDay="2025-09-25T15:00" weatherCode={61} temp={23} />
          <HourlyForecastCard timeOfDay="2025-09-25T18:00" weatherCode={63} temp={22} />
          <HourlyForecastCard timeOfDay="2025-09-25T21:00" weatherCode={65} temp={20} />
          <HourlyForecastCard timeOfDay="2025-09-26T00:00" weatherCode={66} temp={19} />
          <HourlyForecastCard timeOfDay="2025-09-26T03:00" weatherCode={67} temp={18} />
          <HourlyForecastCard timeOfDay="2025-09-26T06:00" weatherCode={71} temp={17} />
          <HourlyForecastCard timeOfDay="2025-09-26T09:00" weatherCode={73} temp={19} />
          <HourlyForecastCard timeOfDay="2025-09-26T12:00" weatherCode={75} temp={22} />
          <HourlyForecastCard timeOfDay="2025-09-26T15:00" weatherCode={77} temp={24} />
          <HourlyForecastCard timeOfDay="2025-09-26T18:00" weatherCode={80} temp={23} />
          <HourlyForecastCard timeOfDay="2025-09-26T21:00" weatherCode={81} temp={21} />
          <HourlyForecastCard timeOfDay="2025-09-27T00:00" weatherCode={82} temp={20} />
          <HourlyForecastCard timeOfDay="2025-09-27T03:00" weatherCode={85} temp={19} />
          <HourlyForecastCard timeOfDay="2025-09-27T06:00" weatherCode={86} temp={18} />
        </div>
      </div>
    </BaseWrapper>
  );
};
