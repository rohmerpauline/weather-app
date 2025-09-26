import { useState } from 'react';
import { DropDown } from '../DropDown/DropDown';
import { UnitsDropDownElement } from '../UnitsDropDownElement/UnitsDropDownElement';

export interface UnitsDropDownProps {}

const TEMPERATURE_OPTIONS = [
  { label: 'Celsius (°C)', value: 'celsius' },
  { label: 'Fahrenheit (°F)', value: 'fahrenheit' },
];

const WIND_SPEED_OPTIONS = [
  { label: 'km/h', value: 'kmh' },
  { label: 'mph', value: 'mph' },
];

const PRECIPITATION_OPTIONS = [
  { label: 'Millimeters (mm)', value: 'mm' },
  { label: 'Inches (in)', value: 'in' },
];

export const UnitsDropDown = ({}: UnitsDropDownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTemperatureUnit, setSelectedTemperatureUnit] = useState(
    TEMPERATURE_OPTIONS[0].value,
  );
  const [selectedWindSpeedUnit, setSelectedWindSpeedUnit] = useState(WIND_SPEED_OPTIONS[0].value);
  const [selectedPrecipitationUnit, setSelectedPrecipitationUnit] = useState(
    PRECIPITATION_OPTIONS[0].value,
  );

  return (
    <div className="relative inline-block">
      <DropDown
        label="Units"
        iconPath="/images/icon-units.svg"
        onClick={() => setShowDropdown(!showDropdown)}
        height="medium"
      />
      {showDropdown && (
        <div className="dropdown-content w-[214px] px-100 py-075">
          <div className="px-100 py-125 preset-7">Switch to Imperial</div>
          <div className="flex flex-col gap-050">
            <UnitsDropDownElement
              title="Temperature"
              options={TEMPERATURE_OPTIONS}
              selectedValue={selectedTemperatureUnit}
              onSelect={setSelectedTemperatureUnit}
            />
            <hr className="border-t border-neutral-600" />
            <UnitsDropDownElement
              title="Wind Speed"
              options={WIND_SPEED_OPTIONS}
              selectedValue={selectedWindSpeedUnit}
              onSelect={setSelectedWindSpeedUnit}
            />
            <hr className="border-t border-neutral-600" />
            <UnitsDropDownElement
              title="Precipitation"
              options={PRECIPITATION_OPTIONS}
              selectedValue={selectedPrecipitationUnit}
              onSelect={setSelectedPrecipitationUnit}
            />
          </div>
        </div>
      )}
    </div>
  );
};
