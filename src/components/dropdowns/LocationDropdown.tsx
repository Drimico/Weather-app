import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface LocationDropdownProps {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}
export const LocationDropdown = ({ location, setLocation }: LocationDropdownProps) => {
  return (
    <Select
      value={location}
      onValueChange={(value) => setLocation(value)}
    >
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="z-1000 mt-6">
        {location === "custom" && <SelectItem value="custom">Custom</SelectItem>}
        {locations.map((city) => (
          <SelectItem
            key={city}
            value={city}
          >
            {city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
const locations = [
  "London",
  "Paris",
  "New York City",
  "Tokyo",
  "Rome",
  "Dubai",
  "Hong Kong",
  "Los Angeles",
  "Sydney",
  "Singapore",
  "Bangkok",
  "Istanbul",
  "Barcelona",
  "Amsterdam",
  "Cairo",
  "Beijing",
  "Rio de Janeiro",
  "Berlin",
  "Seoul",
  "Madrid",
];
