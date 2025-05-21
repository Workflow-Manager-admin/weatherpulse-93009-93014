/**
 * Sample weather data structure for the WeatherPulse application
 * This file provides models and mock data for development
 */

// Current weather data structure
export const currentWeatherModel = {
  location: {
    city: '',
    country: '',
    lat: 0,
    lon: 0,
  },
  current: {
    temp: 0,
    feels_like: 0,
    humidity: 0,
    wind_speed: 0,
    wind_direction: '',
    pressure: 0,
    description: '',
    icon: '',
    lastUpdated: '',
  },
  units: {
    temperature: 'celsius', // or 'fahrenheit'
    wind: 'km/h', // or 'mph'
    pressure: 'hPa', // or 'inHg'
  }
};

// Forecast data structure (daily forecasts)
export const forecastModel = {
  daily: [
    {
      date: '',
      temp: {
        min: 0,
        max: 0,
      },
      description: '',
      icon: '',
      precipitation: 0, // probability of precipitation
      humidity: 0,
      wind_speed: 0,
    },
  ],
};

// Weather insights structure
export const insightsModel = {
  recommendations: [],
  alerts: [],
  airQuality: {
    index: 0,
    description: '',
  },
  sunTimes: {
    sunrise: '',
    sunset: '',
    dayLength: '',
  },
};

// Mock data for development purposes
export const mockWeatherData = {
  location: {
    city: 'New York',
    country: 'US',
    lat: 40.7128,
    lon: -74.0060,
  },
  current: {
    temp: 23,
    feels_like: 25,
    humidity: 65,
    wind_speed: 10,
    wind_direction: 'NE',
    pressure: 1012,
    description: 'Partly cloudy',
    icon: '03d',
    lastUpdated: '2023-07-12T13:45:00Z',
  },
  units: {
    temperature: 'celsius',
    wind: 'km/h',
    pressure: 'hPa',
  },
  forecast: {
    daily: [
      {
        date: '2023-07-13',
        temp: { min: 20, max: 26 },
        description: 'Sunny',
        icon: '01d',
        precipitation: 0,
        humidity: 60,
        wind_speed: 8,
      },
      {
        date: '2023-07-14',
        temp: { min: 19, max: 25 },
        description: 'Cloudy',
        icon: '02d',
        precipitation: 20,
        humidity: 65,
        wind_speed: 10,
      },
      {
        date: '2023-07-15',
        temp: { min: 17, max: 24 },
        description: 'Light rain',
        icon: '10d',
        precipitation: 60,
        humidity: 75,
        wind_speed: 12,
      },
      {
        date: '2023-07-16',
        temp: { min: 18, max: 23 },
        description: 'Overcast',
        icon: '04d',
        precipitation: 30,
        humidity: 70,
        wind_speed: 9,
      },
      {
        date: '2023-07-17',
        temp: { min: 20, max: 27 },
        description: 'Sunny',
        icon: '01d',
        precipitation: 0,
        humidity: 55,
        wind_speed: 7,
      }
    ],
  },
  insights: {
    recommendations: [
      'Good day for outdoor activities in the afternoon',
      'UV index is high, apply sunscreen when outside',
      'Air quality is good for outdoor exercises',
    ],
    alerts: [],
    airQuality: {
      index: 25,
      description: 'Good',
    },
    sunTimes: {
      sunrise: '05:43 AM',
      sunset: '8:31 PM',
      dayLength: '14h 48m',
    },
  },
};

// Function to get weather icon URL based on icon code
export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

// Weather condition to CSS class mapping for theming
export const weatherConditionClasses = {
  '01d': 'weather-clear-day',
  '01n': 'weather-clear-night',
  '02d': 'weather-few-clouds-day',
  '02n': 'weather-few-clouds-night',
  '03d': 'weather-clouds',
  '03n': 'weather-clouds',
  '04d': 'weather-clouds',
  '04n': 'weather-clouds',
  '09d': 'weather-shower-rain',
  '09n': 'weather-shower-rain',
  '10d': 'weather-rain-day',
  '10n': 'weather-rain-night',
  '11d': 'weather-thunderstorm',
  '11n': 'weather-thunderstorm',
  '13d': 'weather-snow',
  '13n': 'weather-snow',
  '50d': 'weather-mist',
  '50n': 'weather-mist',
};
