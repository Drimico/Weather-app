import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface MapTypeDropdownProps {
  mapType: string;
  setMapType: React.Dispatch<React.SetStateAction<string>>;
}
export const MapTypeDropdown = ({ mapType, setMapType }: MapTypeDropdownProps) => {
  return (
    <Select
      value={mapType}
      onValueChange={(value) => setMapType(value)}
    >
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="z-1000 mt-6">
        {types.map((type) => (
          <SelectItem
            key={type}
            value={type}
            className="capitalize"
          >
            {type.split("_")[0]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
const types = ["clouds_new", "precipitation_new", "pressure_new", "wind_new", "temp_new"];
