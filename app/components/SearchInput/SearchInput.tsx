import { City } from '@/app/page';
import _ from 'lodash';
import { useEffect, useState } from 'react';

export interface SearchInputProps {
  /** Current input value */
  value: string;
  /** Change handler */
  onChange: (e: string) => void;
  /** Placeholder text */
  placeholder?: string;
}

export const SearchInput = ({
  value,
  onChange,
  placeholder = 'Search for a place...',
}: SearchInputProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [cities, setCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);

  useEffect(() => {
    fetch('/data/city.list.min.json')
      .then((res) => res.json())
      .then((data: City[]) => {
        // Remove duplicates based on name + country
        const uniqueCities = _.uniqBy(data, (city: City) => `${city.name}-${city.country}`);
        setCities(uniqueCities);
      })
      .catch((error) => {
        console.error('Error fetching city data:', error);
      });
  }, []);

  useEffect(() => {
    if (!value) {
      setFilteredCities([]);
      return;
    }

    const inputLower = value.toLowerCase().trim();

    const filtered = cities
      .filter((city) => {
        const fullName = `${city.name}, ${city.country}`.toLowerCase();
        const nameOnly = city.name.toLowerCase();
        return fullName.startsWith(inputLower) || nameOnly.startsWith(inputLower);
      })
      .slice(0, 20);

    setFilteredCities(filtered);
  }, [value, cities]);

  const handleSelectCity = (city: City) => {
    const fullName = `${city.name}, ${city.country}`;
    onChange(fullName);
    setShowDropdown(false);
  };

  const handleInputChange = (text: string) => {
    onChange(text);
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
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={() => value && setShowDropdown(true)}
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
