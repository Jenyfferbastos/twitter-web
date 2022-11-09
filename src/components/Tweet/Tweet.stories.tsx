import { Meta, StoryObj } from "@storybook/react";
import { Tweet, TweetProps } from "./Tweet";

export default {
  title: "Components/Tweet",
  component: Tweet,
  args: {
  },
  argTypes: {
  },
} as Meta<TweetProps>;

export const Default: StoryObj<TweetProps> = {};