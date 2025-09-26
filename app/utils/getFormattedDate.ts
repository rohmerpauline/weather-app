export const getFormattedDate = (date: Date = new Date()): string => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
  const dd = String(date.getDate()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
};
