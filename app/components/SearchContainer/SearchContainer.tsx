'use client';
import { useFilters } from '@/app/context/FilterContext';
import { useWeather } from '@/app/context/WeatherContext';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { City, SearchInput } from '../SearchInput/SearchInput';

export interface SearchContainerProps {}

export const SearchContainer = ({}: SearchContainerProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<undefined | City>(undefined);
  const { filters, updateFilters } = useFilters();
  const { fetchWeatherData } = useWeather();

  const handleOnClick = () => {
    if (searchQuery) {
      setSearchQuery('');
      updateFilters('city', selectedCity);
      fetchWeatherData({ ...filters, city: selectedCity });
    }
  };

  return (
    <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-[auto_max-content] w-full lg:w-2xl lg:mx-auto items-center gap-3">
      <SearchInput
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSelectedCity={setSelectedCity}
      />
      <Button label="Search" onClick={handleOnClick} />
    </div>
  );
};
