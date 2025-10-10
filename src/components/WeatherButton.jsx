import { useState } from 'react'; // imports React’s useState hook for tracking state - weather data
import weatherIcon from '../assets/weather-icon.svg'; // my icon when i click it i will see the weather data 

const WeatherButton = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);








const fetchWeather = async () => {
  setLoading(true);
  try {
    // To find the latitude and longitude coordinates for Edinburgh - Use Google Maps, Open Google Maps, Search for Edinburgh, Right-click on the pinpoint location, select “What’s here?”
    // The coordinates (latitude, longitude) will appear at the bottom, e.g., 55.9533, -3.1883, from here too: https://www.latlong.net/
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=55.9533&longitude=-3.1883&current_weather=true&timezone=Europe/London');
              
    const data = await res.json();
    setWeather(data.current_weather);
  } catch (err) {
    console.error('Failed to fetch weather:', err);
    setWeather(null);
  }
  setLoading(false);
};







  return (
    <div className="mt-32 text-center">
      <p className="text-xl mb-4 text-gray-200">Before you head out, check the weather — this is Edinburgh, where you can experience all four seasons before lunch.</p>

      <button onClick={fetchWeather} className="inline-flex flex-col items-center hover:scale-105 transition-transform">
        <img src={weatherIcon} alt="Check Weather" className="w-20 h-20 mb-2" />
        <span className="text-white font-medium text-lg">Check Current Weather</span>
      </button>

      {loading && <p className="mt-4 text-gray-300">Loading...</p>}

      {weather && (
        <div className="mt-6 text-gray-100 bg-white/10 p-4 rounded-md max-w-md mx-auto">
          <p><strong>Temperature:</strong> {weather.temperature}°C</p>
          <p><strong>Time:</strong> {weather.time}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherButton;
