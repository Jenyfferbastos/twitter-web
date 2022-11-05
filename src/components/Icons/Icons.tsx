import { iconsCommonTheme } from "../Icons/CommonTheme";
import { iconsLightTheme } from "../Icons/LightTheme/index";
import { iconsDarkTheme } from "../Icons/DarkTheme/index";

export interface ButtonSideMenuProps {
  icon: string;
}
export function ButtonSideMenu({ icon }: ButtonSideMenuProps) {
  return (
    <>
      <img src={iconsCommonTheme[icon]} />
    </>
  );
}


