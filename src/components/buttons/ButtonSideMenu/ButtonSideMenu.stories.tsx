import { Meta, StoryObj } from "@storybook/react";
import { ButtonSideMenu, ButtonSideMenuProps } from "./ButtonSideMenu";

export default {
  title: "Components/ButtonSideMenu",
  component: ButtonSideMenu,
  args: {
    icon: 'home',
    color: 'white',
    text: 'Home'
  },
  argTypes: {
  },
} as Meta<ButtonSideMenuProps>;

export const Default: StoryObj<ButtonSideMenuProps> = {};
