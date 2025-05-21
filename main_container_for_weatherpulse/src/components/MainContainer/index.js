import React, { useState } from 'react';
import './MainContainer.css';
import { mockWeatherData, getWeatherIconUrl, weatherConditionClasses } from '../../models/weatherData';

/**
 * PUBLIC_INTERFACE
 * MainContainer Component
 * Primary container for the WeatherPulse application that displays
 * real-time weather information, forecasts, and personalized insights.
 * 
 * @returns {JSX.Element} The rendered MainContainer
 */
const MainContainer = () => {
  // Use mock data for now, will be replaced with API data later
  const [weatherData] = useState(mockWeatherData);
  const [unit] = useState('celsius');

  // Determine weather theme based on current weather condition
  const weatherIcon = weatherData.current.icon || '02d';
  const weatherThemeClass = weatherConditionClasses[weatherIcon] || 'weather-clear-day';

  // Format temperature display with units
  const formatTemp = (temp) => {
    return `${Math.round(temp)}°${unit === 'celsius' ? 'C' : 'F'}`;
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  };

  // Format day of week
  const formatDay = (dateString) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
  };

  return (
    <div className={`app ${weatherThemeClass}`}>
      {/* Main weather container */}
      <div className="weather-container">
        {/* Current weather section */}
        <section className="weather-card current-weather">
          <div>
            <h2 className="weather-location">{weatherData.location.city}, {weatherData.location.country}</h2>
            <div className="weather-date">{formatDate()}</div>
            
            <div className="weather-main">
              <div className="weather-temp">{formatTemp(weatherData.current.temp)}</div>
              <div>
                <img 
                  src={getWeatherIconUrl(weatherData.current.icon)} 
                  alt={weatherData.current.description} 
                  width="64" 
                  height="64" 
                />
                <div className="weather-description">{weatherData.current.description}</div>
              </div>
            </div>
            
            <div className="weather-details">
              <div className="weather-detail">
                <div className="detail-value">{formatTemp(weatherData.current.feels_like)}</div>
                <div className="detail-label">Feels Like</div>
              </div>
              
              <div className="weather-detail">
                <div className="detail-value">{weatherData.current.humidity}%</div>
                <div className="detail-label">Humidity</div>
              </div>
              
              <div className="weather-detail">
                <div className="detail-value">{weatherData.current.wind_speed} {weatherData.units.wind}</div>
                <div className="detail-label">Wind</div>
              </div>
              
              <div className="weather-detail">
                <div className="detail-value">{weatherData.current.pressure} {weatherData.units.pressure}</div>
                <div className="detail-label">Pressure</div>
              </div>
            </div>
          </div>
        </section>

        {/* Forecast section */}
        <section className="weather-card forecast-section">
          <h3 className="forecast-title">5-Day Forecast</h3>
          <div className="forecast-cards">
            {weatherData.forecast.daily.map((day, index) => (
              <div className="forecast-card" key={index}>
                <div className="forecast-day">{formatDay(day.date)}</div>
                <img 
                  src={getWeatherIconUrl(day.icon)} 
                  alt={day.description} 
                  width="50" 
                  height="50" 
                />
                <div className="forecast-temp">{formatTemp(day.temp.max)}</div>
                <div className="forecast-high-low">
                  <span className="forecast-low">{formatTemp(day.temp.min)}</span>
                </div>
                <div className="forecast-precip">{day.precipitation}%</div>
              </div>
            ))}
          </div>
        </section>

        {/* Insights section */}
        <section className="weather-card insights-section">
          <h3 className="insights-title">Weather Insights</h3>
          
          <div className="recommendations">
            {weatherData.insights.recommendations.map((rec, index) => (
              <div className="recommendation-item" key={index}>
                <div className="recommendation-icon">
                  <span>📍</span>
                </div>
                <div>{rec}</div>
              </div>
            ))}
          </div>

          <div className="insights-grid">
            <div className="air-quality">
              <div>
                <div className="detail-label">Air Quality</div>
                <div className="detail-value">{weatherData.insights.airQuality.description}</div>
              </div>
              <div className="detail-value">{weatherData.insights.airQuality.index} AQI</div>
            </div>
            
            <div className="sun-times">
              <div className="sun-time-item">
                <div className="sun-time-label">Sunrise</div>
                <div className="sun-time-value">{weatherData.insights.sunTimes.sunrise}</div>
              </div>
              
              <div className="sun-time-item">
                <div className="sun-time-label">Sunset</div>
                <div className="sun-time-value">{weatherData.insights.sunTimes.sunset}</div>
              </div>
              
              <div className="sun-time-item">
                <div className="sun-time-label">Day Length</div>
                <div className="sun-time-value">{weatherData.insights.sunTimes.dayLength}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContainer;
