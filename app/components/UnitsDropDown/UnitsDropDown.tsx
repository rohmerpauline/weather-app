'use client';
import {
  PRECIPITATION_OPTIONS,
  TEMPERATURE_OPTIONS,
  WIND_SPEED_OPTIONS,
} from '@/app/constants/constants';
import { useFilters } from '@/app/context/FilterContext';
import { useWeather } from '@/app/context/WeatherContext';
import { useState } from 'react';
import { DropDown } from '../DropDown/DropDown';
import { UnitsDropDownElement } from '../UnitsDropDownElement/UnitsDropDownElement';

export const UnitsDropDown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { filters, updateFilters } = useFilters();
  const { fetchWeatherData } = useWeather();

  const handleUnitChange = (key: keyof typeof filters, value: string) => {
    updateFilters(key, value);

    if (filters.city) {
      fetchWeatherData({ ...filters, [key]: value });
    }

    setShowDropdown(false);
  };

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
              selectedValue={filters.temperatureUnit}
              onSelect={(value) => handleUnitChange('temperatureUnit', value)}
            />
            <hr className="border-t border-neutral-600" />
            <UnitsDropDownElement
              title="Wind Speed"
              options={WIND_SPEED_OPTIONS}
              selectedValue={filters.windSpeedUnit}
              onSelect={(value) => handleUnitChange('windSpeedUnit', value)}
            />
            <hr className="border-t border-neutral-600" />
            <UnitsDropDownElement
              title="Precipitation"
              options={PRECIPITATION_OPTIONS}
              selectedValue={filters.precipitationUnit}
              onSelect={(value) => handleUnitChange('precipitationUnit', value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
