import { iconsCommonTheme } from "./CommonTheme";
import { iconsLightTheme } from "./LightTheme/index";
import { iconsDarkTheme } from "./DarkTheme/index";

export interface DynamicIconProps {
  icon: string;
  theme?: string;
}
export function DynamicIcon({ icon, theme }: DynamicIconProps) {
  return (
    <>
      <img src={defineIcon(icon, theme)} />
    </>
  );
}

function defineIcon(icon: string, theme?: string) {
  if (theme) {
    if (theme === "dark") {
      return iconsDarkTheme[icon];
    } else if (theme === "light") {
      return iconsLightTheme[icon];
    }
  }
  return iconsCommonTheme[icon];
}
