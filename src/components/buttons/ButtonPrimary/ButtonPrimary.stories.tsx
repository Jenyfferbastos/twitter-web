import { Meta, StoryObj } from "@storybook/react";
import { ButtonPrimary, ButtonPrimaryProps } from "./ButtonPrimary";

export default {
  title: "Components/ButtonPrimary",
  component: ButtonPrimary,
  args: {
    children: 'ButtonPrimary',
  },
  argTypes: {},
} as Meta<ButtonPrimaryProps>;

export const Default: StoryObj<ButtonPrimaryProps> = {};
