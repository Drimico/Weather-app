import { DailyForecast } from "./components/cards/DailyForecast";
import { HourlyForecast } from "./components/cards/HourlyForecast";
import { CurrentWeather } from "./components/cards/CurrentWeather";
import { AdditionalInfo } from "./components/cards/AdditionalInfo";
import { Map } from "./components/Map";
import { Suspense, useState } from "react";
import type { Coords } from "./types";
import { LocationDropdown } from "./components/dropdowns/LocationDropdown";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getGeocode } from "./api";
import { MapTypeDropdown } from "./components/dropdowns/MapTypeDropdown";

function App() {
  const [coordinates, setCoordinates] = useState<Coords>({ lat: 50, lon: 25 });
  const [location, setLocation] = useState("London");
  const [mapType, setMapType] = useState("clouds_new");
  const { data: geocodeData } = useQuery({
    queryKey: ["geocode", location],
    queryFn: () => getGeocode(location),
    enabled: location !== "custom",
    placeholderData: keepPreviousData,
  });

  const onMapClick = (lat: number, lon: number) => {
    setCoordinates({ lat, lon });
    setLocation("custom");
  };

  const coords: Coords = location === "custom" ? coordinates : geocodeData ? { lat: geocodeData[0].lat, lon: geocodeData[0].lon } : coordinates;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="flex gap-4">
          <h1 className="text-2xl font-semibold">Location</h1>
          <LocationDropdown
            location={location}
            setLocation={setLocation}
          />
        </div>
        <div className="flex gap-4">
          <h1 className="text-2xl font-semibold">Map Type</h1>
          <MapTypeDropdown
            mapType={mapType}
            setMapType={setMapType}
          />
        </div>
      </div>
      <Map
        coords={coords}
        mapType={mapType}
        onMapClick={onMapClick}
      />
      <Suspense fallback={<div>Loading weather...</div>}>
        <CurrentWeather coords={coords} />
        <HourlyForecast coords={coords} />
        <DailyForecast coords={coords} />
        <AdditionalInfo coords={coords} />
      </Suspense>
    </div>
  );
}

export default App;
