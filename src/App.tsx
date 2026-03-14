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
import { MapLegend } from "./components/MapLegend";
import { CurrentSkeleton } from "./components/skeletons/CurrentSkeleton";
import { DailySkeleton } from "./components/skeletons/DailySkeleton";
import { HourlySkeleton } from "./components/skeletons/HourlySkeleton";
import { AdditionalSkeleton } from "./components/skeletons/AdditionalSkeleton";
import { SidePanel } from "./components/SidePanel";
import Hamburger from "/src/assets/Hamburger.svg?react";
import { MobileHeader } from "./components/MobileHeader";
function App() {
  const [coordinates, setCoordinates] = useState<Coords>({ lat: 50, lon: 25 });
  const [location, setLocation] = useState("London");
  const [mapType, setMapType] = useState("clouds_new");
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
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
    <>
      <MobileHeader setIsSidePanelOpen={setIsSidePanelOpen} />
      <div className="flex flex-col pt-4 md:p-8 p-4 w-full lg:w-[calc(100dvw-var(--sidebar-width))] 2xl:h-screen min-h-275">
        <button
          onClick={() => setIsSidePanelOpen(true)}
          className="hidden sm:block ml-auto pb-4 lg:p-0"
        >
          <Hamburger className="size-6 lg:hidden" />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:flex-1 2xl:min-h-0 2xl:grid-cols-4 2xl:grid-rows-4 gap-4 relative">
          <div className="block sm:absolute z-1001 top-20 left-3">
            <LocationDropdown
              location={location}
              setLocation={setLocation}
            />
            <MapTypeDropdown
              mapType={mapType}
              setMapType={setMapType}
            />
          </div>
          <div className="relative h-120 2xl:h-auto col-span-1 md:col-span-2 2xl:col-span-4 2xl:row-span-2 order-1">
            <Map
              coords={coords}
              mapType={mapType}
              onMapClick={onMapClick}
            />
            <MapLegend mapType={mapType} />
          </div>
          <div className="col-span-1  2xl:row-span-2 order-2">
            <Suspense fallback={<CurrentSkeleton />}>
              <CurrentWeather coords={coords} />
            </Suspense>
          </div>
          <div className="col-span-1 order-3 2xl:order-4 2xl:row-span-2">
            <Suspense fallback={<DailySkeleton />}>
              <DailyForecast coords={coords} />
            </Suspense>
          </div>
          <div className="col-span-1 md:col-span-2 2xl:row-span-1 order-4 2xl:order-3">
            <Suspense fallback={<HourlySkeleton />}>
              <HourlyForecast coords={coords} />
            </Suspense>
          </div>
          <div className="col-span-1 md:col-span-2 2xl:row-span-1 order-5">
            <Suspense fallback={<AdditionalSkeleton />}>
              <AdditionalInfo coords={coords} />
            </Suspense>
          </div>
        </div>
      </div>
      <SidePanel
        coords={coords}
        isSidePanelOpen={isSidePanelOpen}
        setIsSidePanelOpen={setIsSidePanelOpen}
      />
    </>
  );
}

export default App;
