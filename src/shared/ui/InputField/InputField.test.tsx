import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputField from "./InputField";

describe("Компонент InputField", () => {
  it("рендарит компонен", () => {
    render(<InputField label="Username" />);
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("применяет пользовательские классы", () => {
    render(
      <InputField
        label="Email"
        wrapperClassName="custom-wrapper"
        labelClassName="custom-label"
        inputClassName="custom-input"
      />
    );

    expect(screen.getByTestId(/^input-field-wrapper-/)).toHaveClass(
      "custom-wrapper"
    );
    expect(screen.getByText("Email")).toHaveClass("custom-label");
    expect(screen.getByRole("textbox")).toHaveClass("custom-input");
  });

  it("корректно передает HTML-атрибуты в поле ввода", () => {
    render(
      <InputField
        label="Password"
        placeholder="Enter password"
        disabled
        type="password"
      />
    );

    const input = screen.getByLabelText("Password");
    expect(input).toHaveAttribute("placeholder", "Enter password");
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute("type", "password");
  });

  it("обрабатывает ввод пользователя", async () => {
    render(<InputField label="Search" />);
    const input = screen.getByLabelText("Search");
    await userEvent.type(input, "React Testing Library");
    expect(input).toHaveValue("React Testing Library");
  });

  it("поддерживает значение по умолчанию и реагирует на изменения", async () => {
    const handleChange = jest.fn();
    render(
      <InputField label="Comment" value="Hello" onChange={handleChange} />
    );

    const input = screen.getByLabelText("Comment");
    expect(input).toHaveValue("Hello");

    await userEvent.type(input, " world!");
    expect(handleChange).toHaveBeenCalledTimes(7);
  });
});
