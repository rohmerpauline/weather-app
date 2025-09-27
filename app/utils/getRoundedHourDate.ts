export const getRoundedHourDate = (date: Date) => {
  const roundedHour =
    date.getMinutes() >= 30 ? date.getHours() + 1 : date.getHours();

  const d = new Date(date);
  d.setHours(roundedHour, 0, 0, 0);

  // Format as "YYYY-MM-DDTHH:MM"
  const pad = (n: number) => String(n).padStart(2, '0');

  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:00`;
};
