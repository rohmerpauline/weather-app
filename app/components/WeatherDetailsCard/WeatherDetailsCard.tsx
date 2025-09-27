import { BaseWrapper } from '../BaseWrapper/BaseWrapper';

export interface WeatherDetailsCardProps {
  /** The label describing the weather data */
  label: string;
  /** The value associated with the label */
  value: string | undefined;
}

export const WeatherDetailsCard = ({
  label,
  value,
}: WeatherDetailsCardProps) => {
  return (
    <BaseWrapper>
      <div className="flex flex-col gap-300 w-full p-250">
        <p className="preset-5">{label}</p>
        <p className="preset-3">{value ?? '-'}</p>
      </div>
    </BaseWrapper>
  );
};
