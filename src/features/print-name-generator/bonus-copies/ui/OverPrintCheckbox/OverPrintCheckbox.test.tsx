import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OverPrintCheckbox from "./OverPrintCheckbox";

describe("Компонент OverPrintCheckbox", () => {
  it("рендерит чекбокс с правильной подписью", () => {
    render(<OverPrintCheckbox checked={false} onChange={() => {}} />);
    const checkbox = screen.getByLabelText("Показать сверхтираж шт.");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("отображает чекбокс как отмеченный, если checked=true", () => {
    render(<OverPrintCheckbox checked={true} onChange={() => {}} />);
    const checkbox = screen.getByLabelText("Показать сверхтираж шт.");
    expect(checkbox).toBeChecked();
  });

  it("вызывает onChange при клике", async () => {
    const handleChange = jest.fn();
    render(<OverPrintCheckbox checked={false} onChange={handleChange} />);
    const checkbox = screen.getByLabelText("Показать сверхтираж шт.");
    await userEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("применяет пользовательский класс", () => {
    render(<OverPrintCheckbox checked={false} onChange={() => {}} className="custom-class" />);

    const input = screen.getByLabelText("Показать сверхтираж шт.");
    const label = input.closest("label");

    expect(label).toHaveClass("custom-class");
  });
});
