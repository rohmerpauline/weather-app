export const DAYS_OF_THE_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
export const TODAY_WEEK_DAY = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
});
export const NEXT_DAYS = DAYS_OF_THE_WEEK.slice(
  DAYS_OF_THE_WEEK.indexOf(TODAY_WEEK_DAY),
).concat(DAYS_OF_THE_WEEK.slice(0, DAYS_OF_THE_WEEK.indexOf(TODAY_WEEK_DAY)));

export const TEMPERATURE_OPTIONS = [
  { label: 'Celsius (°C)', value: 'celsius' },
  { label: 'Fahrenheit (°F)', value: 'fahrenheit' },
];

export const WIND_SPEED_OPTIONS = [
  { label: 'km/h', value: 'kmh' },
  { label: 'mph', value: 'mph' },
];

export const PRECIPITATION_OPTIONS = [
  { label: 'Millimeters (mm)', value: 'mm' },
  { label: 'Inches (in)', value: 'inch' },
];
