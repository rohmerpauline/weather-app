'use client';
import {
  DAYS_OF_THE_WEEK,
  NEXT_DAYS,
  TODAY_WEEK_DAY,
} from '@/app/constants/constants';
import { Dispatch, SetStateAction, useState } from 'react';
import { DropDown } from '../DropDown/DropDown';

export interface DaysDropDownProps {
  selectedDay: string;
  setSelectedDay: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
}

export const DaysDropDown = ({
  selectedDay,
  setSelectedDay,
  isLoading,
}: DaysDropDownProps) => {
  const today = new Date();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectDay = (day: string) => {
    const todayIndex = DAYS_OF_THE_WEEK.indexOf(TODAY_WEEK_DAY);
    const selectedIndex = DAYS_OF_THE_WEEK.indexOf(day);

    // calculate offset (days from today)
    let offset = selectedIndex - todayIndex;
    if (offset < 0) offset += 7;

    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + offset);

    setSelectedDay(targetDate.toISOString().slice(0, 10));
    setShowDropdown(false);
  };

  return (
    <div className="relative inline-block">
      <DropDown
        label={
          isLoading
            ? '-'
            : new Date(selectedDay).toLocaleDateString('en-US', {
                weekday: 'long',
              })
        }
        onClick={() => setShowDropdown(!showDropdown)}
        height="small"
      />
      {showDropdown && (
        <div className="dropdown-content w-[214px]">
          <ul>
            {NEXT_DAYS.map((day) => (
              <li
                key={day}
                className="hover:bg-neutral-700 border-neutral-600 px-100 py-125 cursor-pointer rounded-8"
                onClick={() => handleSelectDay(day)}
              >
                {day}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
