'use client';
import { useFilters } from '@/app/context/FilterContext';
import { useWeather } from '@/app/context/WeatherContext';
import _ from 'lodash';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface City {
  id: number;
  name: string;
  country: string;
  state: string;
  coord: {
    lon: number;
    lat: number;
  };
}

export interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setSelectedCity: any;
}

export const SearchInput = ({ searchQuery, setSearchQuery, setSelectedCity }: SearchInputProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [cities, setCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const { filters, updateFilters } = useFilters();
  const { fetchWeatherData } = useWeather();

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await fetch('/data/city.list.min.json');
        const data: City[] = await res.json();
        const uniqueCities = _.uniqBy(data, (c) => `${c.name}-${c.country}`);
        const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

        const citiesWithCountryNames = uniqueCities.map((city) => ({
          ...city,
          country:
            city.country.length === 2
              ? (regionNames.of(city.country) ?? city.country)
              : city.country,
        }));
        setCities(citiesWithCountryNames);

        const defaultCity = citiesWithCountryNames.find(
          (city) => city.name === 'Brussels' && city.country === 'Belgium',
        );
        if (defaultCity) {
          updateFilters('city', defaultCity);
          fetchWeatherData({ ...filters, city: defaultCity });
        }
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredCities([]);
      return;
    }

    const inputLower = searchQuery.toLowerCase().trim();

    const filtered = cities
      .filter((city) => {
        const fullName = `${city.name}, ${city.country}`.toLowerCase();
        const nameOnly = city.name.toLowerCase();
        return fullName.startsWith(inputLower) || nameOnly.startsWith(inputLower);
      })
      .slice(0, 20);

    setFilteredCities(filtered);
  }, [searchQuery, cities]);

  const handleSelectCity = (city: City) => {
    const fullName = `${city.name}, ${city.country}`;
    setSearchQuery(fullName);
    setSelectedCity(city);
    setShowDropdown(false);
  };

  const handleInputChange = (text: string) => {
    setSearchQuery(text);
    if (text && text !== '') {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  return (
    <div className="relative w-full">
      <img
        src="/images/icon-search.svg"
        alt="Search Icon"
        className="absolute left-3 top-1/2 -translate-y-1/2"
      />
      <input
        type="text"
        className="preset-5 w-full h-[56px] bg-neutral-800 rounded-12 p-200 text-neutral-0 placeholder:text-neutral-200 px-600 py-200 hover:bg-neutral-700"
        placeholder="Search for a place..."
        value={searchQuery}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={() => searchQuery && setShowDropdown(true)}
      />
      {showDropdown && filteredCities.length > 0 && (
        <div className="dropdown-content w-full max-h-[210px] overflow-y-auto">
          <ul className="preset-7">
            {filteredCities.map((city) => (
              <li
                key={city.id}
                className="hover:bg-neutral-700 border-neutral-600 px-100 py-125 cursor-pointer rounded-8"
                onClick={() => handleSelectCity(city)}
              >
                {city.name}, {city.country}
              </li>
            ))}
          </ul>
        </div>
      )}
      {showDropdown && filteredCities.length === 0 && (
        <div className="absolute top-full left-0 w-full bg-neutral-800 rounded-12 mt-150 p-100 z-10">
          <ul>
            <li>No results found</li>
          </ul>
        </div>
      )}
    </div>
  );
};
