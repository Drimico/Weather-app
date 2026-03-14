import Sun from "/src/assets/Sun.svg?react";
import Moon from "/src/assets/Moon.svg?react";
import { Switch } from "./ui/switch";
import { useTheme } from "./ThemeProvider";

export const LightDarkToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex items-center gap-2 absolute right-5 top-5">
      <Sun className="size-5 " />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
      />
      <Moon className="size-5 " />
    </div>
  );
};
