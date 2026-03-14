import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface MapTypeDropdownProps {
  mapType: string;
  setMapType: React.Dispatch<React.SetStateAction<string>>;
}
export const MapTypeDropdown = ({ mapType, setMapType }: MapTypeDropdownProps) => {
  return (
    <div className=" flex flex-col items-center sm:items-start gap-2 z-1001 top-[30%] left-2">
      <h1 className="text-2xl font-semibold whitespace-nowrap text-white text-shadow-[2px_2px_2px] text-shadow-black">Map Type</h1>

      <Select
        value={mapType}
        onValueChange={(value) => setMapType(value)}
      >
        <SelectTrigger className="sm:w-45 400:w-70 w-full  ">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className="z-1010">
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
    </div>
  );
};
const types = ["clouds_new", "precipitation_new", "pressure_new", "wind_new", "temp_new"];
