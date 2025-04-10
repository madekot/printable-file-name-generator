import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";
import { fn } from "@storybook/test";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    checked: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    className: {
      control: { type: "text" },
    },
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
    checked: false,
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  args: {
    checked: false,
    label: "Unchecked checkbox",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: "Checked checkbox",
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: false,
  },
};

export const WithCustomClass: Story = {
  args: {
    checked: false,
    label: "Custom styled checkbox",
    className: "custom-checkbox-class",
  },
};
