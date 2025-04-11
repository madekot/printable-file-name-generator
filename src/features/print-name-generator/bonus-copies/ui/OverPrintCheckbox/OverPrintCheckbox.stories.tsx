import { Meta, StoryObj } from "@storybook/react";
import OverPrintCheckbox from "./OverPrintCheckbox";
import { fn } from "@storybook/test";

const meta: Meta<typeof OverPrintCheckbox> = {
  title: "Components/OverPrintCheckbox",
  component: OverPrintCheckbox,
  parameters: {
    layout: "centered", // Центрируем компонент на экране
  },
  argTypes: {
    checked: {
      control: { type: "boolean" }, // Управляем значением checkbox
    },
    className: {
      control: { type: "text" }, // Поддержка кастомных классов
    },
  },
  tags: ["autodocs"],
  args: {
    checked: false, // Значение по умолчанию для checked
    onChange: fn(), // Мок функции для onChange
  },
};

export default meta;
type Story = StoryObj<typeof OverPrintCheckbox>;

export const Default: Story = {
  args: {
    checked: false, // По умолчанию не отмечен
  },
};

export const Checked: Story = {
  args: {
    checked: true, // Проверим когда он отмечен
  },
};

export const WithCustomClass: Story = {
  args: {
    checked: false,
    className: "custom-class", // Применяем пользовательский класс
  },
};
