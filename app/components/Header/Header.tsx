'use client';
import { UnitsDropDown } from '../UnitsDropDown/UnitsDropDown';

export interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header>
      <div className="flex h-auto items-center justify-between">
        <img
          src="/images/logo.svg"
          alt="Weather App Logo"
          className="h-[18px] md:h-[26px] w-auto"
        />
        <UnitsDropDown />
      </div>
    </header>
  );
};
