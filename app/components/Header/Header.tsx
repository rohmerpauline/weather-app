'use client';
import Image from 'next/image';
import { UnitsDropDown } from '../UnitsDropDown/UnitsDropDown';

export const Header = () => {
  return (
    <header>
      <div className="flex h-auto items-center justify-between">
        <div className="h-[18px] md:h-[26px]">
          <Image
            src="/images/logo.svg"
            alt="Weather App Logo"
            width={100}
            height={26}
            style={{ height: '100%', width: 'auto' }}
          />
        </div>
        <UnitsDropDown />
      </div>
    </header>
  );
};
