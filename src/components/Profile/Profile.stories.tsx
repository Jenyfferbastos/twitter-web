import { Meta, StoryObj } from "@storybook/react";
import { Profile, ProfileProps } from "./Profile";

export default {
  title: "Components/Profile",
  component: Profile,
  args: {
    textName: 'Name',
    textUser:'@user'
  },
  argTypes: {
  },
} as Meta<ProfileProps>;

export const Default: StoryObj<ProfileProps> = {};