import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface LocationDropdownProps {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}
export const LocationDropdown = ({ location, setLocation }: LocationDropdownProps) => {
  return (
    <div className=" flex flex-col items-center gap-2 sm:items-start z-1001 top-[15%] left-2 text-shadow-[2px_2px_2px] text-shadow-black">
      <h1 className="text-2xl font-semibold text-white text-shadow-[2px_2px_2px] text-shadow-black">Location</h1>
      <Select
        value={location}
        onValueChange={(value) => setLocation(value)}
      >
        <SelectTrigger className="sm:w-45 400:w-70 w-full ">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className="z-1010">
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
