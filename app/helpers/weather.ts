export const getWeatherIconPath = (weatherCode: number): string => {
  let weatherIconName;

  switch (weatherCode) {
    case 0:
      weatherIconName = 'icon-sunny';
      break;
    case 1:
    case 2:
      weatherIconName = 'icon-partly-cloudy';
      break;
    case 3:
      weatherIconName = 'icon-overcast';
      break;
    case 45:
    case 48:
      weatherIconName = 'icon-fog';
      break;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      weatherIconName = 'icon-drizzle';
      break;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      weatherIconName = 'icon-rain';
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      weatherIconName = 'icon-snow';
      break;
    case 95:
    case 96:
    case 99:
      weatherIconName = 'icon-storm';
      break;
    default:
      weatherIconName = 'icon-error';
  }

  const ext = weatherIconName === 'icon-error' ? '.png' : '.webp';
  const weatherIconPath = `/images/${weatherIconName}${ext}`;
  return weatherIconPath;
};
