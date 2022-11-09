import { Meta, StoryObj } from "@storybook/react";
import { Post, PostProps } from "./Post";

export default {
  title: "Components/Post",
  component: Post,
  args: {
  },
  argTypes: {
  },
} as Meta<PostProps>;

export const Default: StoryObj<PostProps> = {};