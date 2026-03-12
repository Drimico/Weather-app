import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface LocationDropdownProps {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}
export const LocationDropdown = ({ location, setLocation }: LocationDropdownProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-2 sm:items-start">
      <h1 className="text-2xl font-semibold">Location</h1>
      <Select
        value={location}
        onValueChange={(value) => setLocation(value)}
      >
        <SelectTrigger className="sm:w-45 400:w-70 w-full">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className="z-1000">
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
    </div>
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
