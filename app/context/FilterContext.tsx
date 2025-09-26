'use client';
import { createContext, ReactNode, useContext, useState } from 'react';
import { City } from '../components/SearchInput/SearchInput';
import {
  PRECIPITATION_OPTIONS,
  TEMPERATURE_OPTIONS,
  WIND_SPEED_OPTIONS,
} from '../constants/constants';

export interface Filters {
  city: City | undefined;
  temperatureUnit: string;
  windSpeedUnit: string;
  precipitationUnit: string;
}

export interface FiltersContextType {
  filters: Filters;
  updateFilters: (key: keyof Filters, value: any) => void;
}

const DEFAULT_FILTERS = {
  city: undefined,
  temperatureUnit: TEMPERATURE_OPTIONS[0].value,
  windSpeedUnit: WIND_SPEED_OPTIONS[0].value,
  precipitationUnit: PRECIPITATION_OPTIONS[0].value,
};

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);

  const updateFilters = (key: keyof typeof filters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <FiltersContext.Provider value={{ filters, updateFilters }}>{children}</FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) throw new Error('useFilters must be used within a FiltersProvider');
  return context;
};
