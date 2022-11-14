import '../../styles/reset.css'
import { Meta, StoryObj } from "@storybook/react";
import { Header, HeaderProps } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  args: {
    title: 'Home'
  },
  argTypes: {
  },
} as Meta<HeaderProps>;

export const Default: StoryObj<HeaderProps> = {};