import { LightDarkToggle } from "./LightDarkToggle";
import Hamburger from "/src/assets/Hamburger.svg?react";

interface MobileHeaderProps {
  setIsSidePanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const MobileHeader = ({ setIsSidePanelOpen }: MobileHeaderProps) => {
  return (
    <div className="w-full h-16 p-4 bg-background gap-8 sticky top-0 sm:hidden flex justify-end z-1001">
      <LightDarkToggle />
      <button onClick={() => setIsSidePanelOpen(true)}>
        <Hamburger className="size-6 " />
      </button>
    </div>
  );
};
