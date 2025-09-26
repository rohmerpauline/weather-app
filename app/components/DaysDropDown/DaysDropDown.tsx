import { useState } from 'react';
import { DropDown } from '../DropDown/DropDown';

export interface DaysDropDownProps {}

export const DaysDropDown = ({}: DaysDropDownProps) => {
  const today = new Date();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>(today.toISOString().slice(0, 10));

  const daysOfTheWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const todayName = today.toLocaleDateString('en-US', { weekday: 'long' });
  const startIndex = daysOfTheWeek.indexOf(todayName);
  const nextDays = daysOfTheWeek.slice(startIndex).concat(daysOfTheWeek.slice(0, startIndex));

  const handleSelectDay = (day: string) => {
    const todayIndex = daysOfTheWeek.indexOf(todayName);
    const selectedIndex = daysOfTheWeek.indexOf(day);

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
        label={new Date(selectedDay).toLocaleDateString('en-US', { weekday: 'long' })}
        onClick={() => setShowDropdown(!showDropdown)}
        height="small"
      />
      {showDropdown && (
        <div className="dropdown-content w-[214px]">
          <ul>
            {nextDays.map((day) => (
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
