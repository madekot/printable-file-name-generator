import { Meta, StoryObj } from "@storybook/react";
import CloneVariantButton from "./CloneVariantButton";
import { fn } from "@storybook/test";

const meta: Meta<typeof CloneVariantButton> = {
  title: "Components/CloneVariantButton",
  component: CloneVariantButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variantId: {
      control: { type: "number" },
      description: "ID варианта для дублирования",
      defaultValue: 1,
    },
    clickHandler: {
      action: "clicked",
      description: "Функция для обработки клика по кнопке",
    },
  },
  tags: ["autodocs"],
  args: {
    clickHandler: fn(),
    variantId: 1,
  },
};

export default meta;
type Story = StoryObj<typeof CloneVariantButton>;

export const Default: Story = {
  args: {},
};

export const WithCustomText: Story = {
  args: {
    children: "Копировать вариант",
  },
};

export const WithCustomId: Story = {
  args: {
    variantId: 2,
  },
};

export const CustomClassVariant: Story = {
  args: {
    className: "bonus-custom-class", // Можно добавить кастомный стиль, если нужно
  },
};
