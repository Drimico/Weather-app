import { airPollutionSchema } from "./schemas/airPollutionSchema";
import { geocodeSchema } from "./schemas/geocodeSchema";
import { weatherSchema } from "./schemas/weatherSchema";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getWeather = async ({ lat, lon }: { lat: number; lon: number }) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=${API_KEY}`,
  );
  const data = await res.json();
  return weatherSchema.parse(data);
};

export const getGeocode = async (location: string) => {
  const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`);
  const data = await res.json();
  console.log(data);

  return geocodeSchema.parse(data);
};

export const getAirPollution = async ({ lat, lon }: { lat: number; lon: number }) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
  const data = await res.json();
  return airPollutionSchema.parse(data);
};
