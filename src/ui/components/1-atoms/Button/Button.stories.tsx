import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Atoms/Action/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default: Story<ButtonProps> = Template.bind({});
Default.args = {
  text: "Default Button",
};
