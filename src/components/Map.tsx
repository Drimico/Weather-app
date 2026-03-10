import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Coords } from "../types";
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
      style={{ width: "100%", height: "500px" }}
    >
      <MapClick
        onMapClick={onMapClick}
        coords={coords}
      />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`} />
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
