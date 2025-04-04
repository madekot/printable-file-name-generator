import { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";
import { fn } from "@storybook/test";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField", // Название компонента в Storybook
  component: InputField,
  parameters: {
    layout: "centered", // Центрирование компонента в Storybook
  },
  argTypes: {
    label: {
      control: { type: "text" }, // Управление текстом лейбла
      description: "Текст лейбла",
    },
    inputClassName: {
      control: { type: "text" }, // Управление классом для инпута
      description: "Класс для инпута",
    },
    labelClassName: {
      control: { type: "text" }, // Управление классом для лейбла
      description: "Класс для лейбла",
    },
    wrapperClassName: {
      control: { type: "text" }, // Управление классом для обёртки
      description: "Класс для обёртки",
    },
  },
  args: {
    label: "Имя пользователя", // Пример текста лейбла
    value: "",
    placeholder: "",
    inputClassName: "input-field", // Пример класса для инпута
    labelClassName: "input-label", // Пример класса для лейбла
    wrapperClassName: "input-wrapper", // Пример класса для обёртки
    onClick: fn(),
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Введите ваше имя", // Лейбл по умолчанию
    placeholder: "Имя", // Плейсхолдер для инпута
    value: "Вальдемар",
  },
};

export const WithCustomClasses: Story = {
  args: {
    label: "Пароль",
    inputClassName: "custom-input", // Пример кастомного класса для инпута
    labelClassName: "custom-label", // Пример кастомного класса для лейбла
    wrapperClassName: "custom-wrapper", // Пример кастомного класса для обёртки
  },
};

export const Disabled: Story = {
  args: {
    label: "Email",
    placeholder: "Введите ваш email",
    disabled: true, // Поле ввода будет заблокировано
  },
};
