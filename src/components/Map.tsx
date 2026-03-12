import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Coords } from "../types";
import { useEffect } from "react";
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";
const API_KEY = import.meta.env.VITE_API_KEY;

interface MapProps {
  coords: Coords;
  mapType: string;
  onMapClick: (lat: number, lon: number) => void;
}
export const Map = ({ coords, mapType, onMapClick }: MapProps) => {
  const { lat, lon } = coords;
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={13}
      style={{ width: "100%", height: "100%" }}
    >
      <MapClick
        onMapClick={onMapClick}
        coords={coords}
      />
      <MapTileLayer />
      <TileLayer opacity={0.7} url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`} />
      <Marker position={[lat, lon]} />
    </MapContainer>
  );
};

const MapClick = ({ onMapClick, coords }: { onMapClick: (lat: number, lon: number) => void; coords: Coords }) => {
  const map = useMap();
  map.panTo([coords.lat, coords.lon]);

  map.on("click", (e) => {
    const { lat, lng } = e.latlng;
    onMapClick(lat, lng);
  });
  return null;
};

const MapTileLayer = () => {
  const map = useMap();

  useEffect(() => {
    const tileLayer = new MaptilerLayer({
      style: "basic-dark",
      apiKey: "qsJaY2K1c3Y0GGE4byH9",
    });
    tileLayer.addTo(map);

    return () => {
      map.removeLayer(tileLayer);
    };
  }, [map]);
  return null;
};
