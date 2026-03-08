import clsx from "clsx";

interface WeatherIconProps {
  src: string;
  className?: string;
}
const WeatherIcon = ({ src, className }: WeatherIconProps) => {
  return (
    <img
      className={clsx("size-8", className)}
      src={`https://openweathermap.org/img/wn/${src}.png`}
      alt="Weather Icon"
    />
  );
};

export default WeatherIcon;
